const { sendWebNotifications } = require('./send_web_push')

async function sendNotificationToUsers(lunchspace, userIds, notification) {
  console.log(userIds)
  await sendWebNotifications(lunchspace, userIds, notification)
}

module.exports = {
  sendNotificationToUsers,
}
