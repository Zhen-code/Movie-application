// // 时间格式化
// export function formatDate (date, fmt) {
//   let o = {
//     'M+': date.getMonth() + 1, // 月份
//     'd+': date.getDate(), // 日
//     'h+': date.getHours(), // 小时
//     'm+': date.getMinutes(), // 分
//     's+': date.getSeconds(), // 秒
//     'S': date.getMilliseconds() // 毫秒
//   }
//   if (/(y+)/.test(fmt)) {
//       fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
//   }
//   for (var k in o) {
//       if (new RegExp('(' + k + ')').test(fmt)) {
//           fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
//       }
//   }
//   return fmt
// }
export function formatDate (date){
  var dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
}