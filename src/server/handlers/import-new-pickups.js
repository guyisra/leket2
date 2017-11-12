module.exports = ({PendingPickup, Supplier, Location, User}) => async (req, res) => {
  const data = {
    pickupId: 1,
    date: '13/07/16',
    userId: 'VOL0000057',
    userName: 'דנידין',
    userPhone: '0547654321',
    userEmail: 'danidin@gmail.com',
    locationId: 'FS000047',
    locationName: 'קניון עזריאלי',
    status: 'email_sent',
    suppliers: [
      { supplierId: 'FS000202', supplierName: 'אסאדו באבוקדו' },
      { supplierId: 'FS000210', supplierName: 'כרמליס בייגלס' }
    ]
  }

  await User.upsert({
    id: data.userId,
    name: data.userName,
    phone: data.userPhone,
    email: data.userEmail
  })

  await Location.upsert({
    locationId: data.locationId,
    locationName: data.locationName
  })

  data.suppliers.forEach((curr) => {
    const res = await Supplier.upsert({
      pid: curr.supplierId,
      name: curr.supplierName,
      locationId: data.locationId
    })

    if (!res) console.error('Error!', curr)
  })

  data.suppliers.forEach((curr) => {
    const res = await PendingPickup.upsert({
      pid: data.pickupId,
      date: data.date,
      userId: data.userId,
      supplierId: curr.supplierId
    })

    if (!res) console.error('Error!', curr)
  })
  
}