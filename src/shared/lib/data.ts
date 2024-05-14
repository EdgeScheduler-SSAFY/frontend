import { userList, selectList } from "./type";

// export const userLists: userList[] = [
//   {
//     id: 1,
//     name: "hyunsooCho",
//     profile: "/images/profile.webp",
//     zoneId: "Asia/Seoul",
//     department: "Development Team 1",
//   },
//   {
//     id: 2,
//     name: "김중광",
//     profile: "/images/profile.webp",
//     zoneId: "Asia/Seoul",
//     department: "Development Team 1",
//   },
//   {
//     id: 3,
//     name: "전은평",
//     profile: "/images/profile.webp",
//     zoneId: "Asia/Seoul",
//     department: "Development Team 1",
//   },
//   {
//     id: 4,
//     name: "조용환",
//     profile: "/images/profile.webp",
//     zoneId: "Asia/Seoul",
//     department: "Development Team 2",
//   },
//   {
//     id: 5,
//     name: "오형택",
//     profile: "/images/profile.webp",
//     zoneId: "Asia/Seoul",
//     department: "Development Team 2",
//   },
//   {
//     id: 6,
//     name: "노세희",
//     profile: "/images/profile.webp",
//     zoneId: "Europe/London",
//     department: "Development Team 2",
//   },
// ];

export const runningTime: selectList[] = [
  { value: 15, option: "15 minutes" },
  { value: 30, option: "30 minutes" },
  { value: 45, option: "45 minutes" },
  { value: 60, option: "1 hour" },
  { value: 75, option: "1 hour 15minutes" },
  { value: 90, option: "1 hour 30minutes" },
  { value: 105, option: "1 hour 45minutes" },
  { value: 120, option: "2 hour" },
  { value: 135, option: "2 hour 15minutes" },
  { value: 150, option: "2 hour 30minutes" },
  { value: 165, option: "2 hour 45minutes" },
  { value: 180, option: "3 hour" },
  { value: 195, option: "3 hour 15minutes" },
  { value: 210, option: "3 hour 30minutes" },
  { value: 225, option: "3 hour 45minutes" },
  { value: 240, option: "4 hour" },
  { value: 255, option: "4 hour 15minutes" },
  { value: 270, option: "4 hour 30minutes" },
  { value: 285, option: "4 hour 45minutes" },
];

export const intervalTime = [
  { value: "00:00:00", option: "AM 12:00" },
  { value: "00:15:00", option: "AM 12:15" },
  { value: "00:30:00", option: "AM 12:30" },
  { value: "00:45:00", option: "AM 12:45" },
  { value: "01:00:00", option: "AM 01:00" },
  { value: "01:15:00", option: "AM 01:15" },
  { value: "01:30:00", option: "AM 01:30" },
  { value: "01:45:00", option: "AM 01:45" },
  { value: "02:00:00", option: "AM 02:00" },
  { value: "02:15:00", option: "AM 02:15" },
  { value: "02:30:00", option: "AM 02:30" },
  { value: "02:45:00", option: "AM 02:45" },
  { value: "03:00:00", option: "AM 03:00" },
  { value: "03:15:00", option: "AM 03:15" },
  { value: "03:30:00", option: "AM 03:30" },
  { value: "03:45:00", option: "AM 03:45" },
  { value: "04:00:00", option: "AM 04:00" },
  { value: "04:15:00", option: "AM 04:15" },
  { value: "04:30:00", option: "AM 04:30" },
  { value: "04:45:00", option: "AM 04:45" },
  { value: "05:00:00", option: "AM 05:00" },
  { value: "05:15:00", option: "AM 05:15" },
  { value: "05:30:00", option: "AM 05:30" },
  { value: "05:45:00", option: "AM 05:45" },
  { value: "06:00:00", option: "AM 06:00" },
  { value: "06:15:00", option: "AM 06:15" },
  { value: "06:30:00", option: "AM 06:30" },
  { value: "06:45:00", option: "AM 06:45" },
  { value: "07:00:00", option: "AM 07:00" },
  { value: "07:15:00", option: "AM 07:15" },
  { value: "07:30:00", option: "AM 07:30" },
  { value: "07:45:00", option: "AM 07:45" },
  { value: "08:00:00", option: "AM 08:00" },
  { value: "08:15:00", option: "AM 08:15" },
  { value: "08:30:00", option: "AM 08:30" },
  { value: "08:45:00", option: "AM 08:45" },
  { value: "09:00:00", option: "AM 09:00" },
  { value: "09:15:00", option: "AM 09:15" },
  { value: "09:30:00", option: "AM 09:30" },
  { value: "09:45:00", option: "AM 09:45" },
  { value: "10:00:00", option: "AM 10:00" },
  { value: "10:15:00", option: "AM 10:15" },
  { value: "10:30:00", option: "AM 10:30" },
  { value: "10:45:00", option: "AM 10:45" },
  { value: "11:00:00", option: "AM 11:00" },
  { value: "11:15:00", option: "AM 11:15" },
  { value: "11:30:00", option: "AM 11:30" },
  { value: "11:45:00", option: "AM 11:45" },
  { value: "12:00:00", option: "PM 12:00" },
  { value: "12:15:00", option: "PM 12:15" },
  { value: "12:30:00", option: "PM 12:30" },
  { value: "12:45:00", option: "PM 12:45" },
  { value: "13:00:00", option: "PM 01:00" },
  { value: "13:15:00", option: "PM 01:15" },
  { value: "13:30:00", option: "PM 01:30" },
  { value: "13:45:00", option: "PM 01:45" },
  { value: "14:00:00", option: "PM 02:00" },
  { value: "14:15:00", option: "PM 02:15" },
  { value: "14:30:00", option: "PM 02:30" },
  { value: "14:45:00", option: "PM 02:45" },
  { value: "15:00:00", option: "PM 03:00" },
  { value: "15:15:00", option: "PM 03:15" },
  { value: "15:30:00", option: "PM 03:30" },
  { value: "15:45:00", option: "PM 03:45" },
  { value: "16:00:00", option: "PM 04:00" },
  { value: "16:15:00", option: "PM 04:15" },
  { value: "16:30:00", option: "PM 04:30" },
  { value: "16:45:00", option: "PM 04:45" },
  { value: "17:00:00", option: "PM 05:00" },
  { value: "17:15:00", option: "PM 05:15" },
  { value: "17:30:00", option: "PM 05:30" },
  { value: "17:45:00", option: "PM 05:45" },
  { value: "18:00:00", option: "PM 06:00" },
  { value: "18:15:00", option: "PM 06:15" },
  { value: "18:30:00", option: "PM 06:30" },
  { value: "18:45:00", option: "PM 06:45" },
  { value: "19:00:00", option: "PM 07:00" },
  { value: "19:15:00", option: "PM 07:15" },
  { value: "19:30:00", option: "PM 07:30" },
  { value: "19:45:00", option: "PM 07:45" },
  { value: "20:00:00", option: "PM 08:00" },
  { value: "20:15:00", option: "PM 08:15" },
  { value: "20:30:00", option: "PM 08:30" },
  { value: "20:45:00", option: "PM 08:45" },
  { value: "21:00:00", option: "PM 09:00" },
  { value: "21:15:00", option: "PM 09:15" },
  { value: "21:30:00", option: "PM 09:30" },
  { value: "21:45:00", option: "PM 09:45" },
  { value: "22:00:00", option: "PM 10:00" },
  { value: "22:15:00", option: "PM 10:15" },
  { value: "22:30:00", option: "PM 10:30" },
  { value: "22:45:00", option: "PM 10:45" },
  { value: "23:00:00", option: "PM 11:00" },
  { value: "23:15:00", option: "PM 11:15" },
  { value: "23:30:00", option: "PM 11:30" },
  { value: "23:45:00", option: "PM 11:45" },
];

export const worldTime = [
  { option: "Afghanistan", value: "Asia/Kabul" },
  { option: "Albania", value: "Europe/Tirane" },
  { option: "Algeria", value: "Africa/Algiers" },
  { option: "American Samoa", value: "Pacific/Pago_Pago" },
  { option: "Angola", value: "Africa/Luanda" },
  { option: "Anguilla", value: "America/Anguilla" },
  { option: "Antigua and Barbuda", value: "America/Antigua" },
  { option: "Argentina", value: "America/Argentina/Buenos_Aires" },
  { option: "Armenia", value: "Asia/Yerevan" },
  { option: "Aruba", value: "America/Aruba" },
  { option: "Asia Pacific HQ", value: "Pacific/Guam" },
  { option: "Australia", value: "Australia/Sydney" },
  { option: "Austria", value: "Europe/Vienna" },
  { option: "Azerbaijan", value: "Asia/Baku" },
  { option: "Bahamas", value: "America/Nassau" },
  { option: "Bahrain", value: "Asia/Bahrain" },
  { option: "Bangladesh", value: "Asia/Dhaka" },
  { option: "Barbados", value: "America/Barbados" },
  { option: "Belarus", value: "Europe/Minsk" },
  { option: "Belgium", value: "Europe/Brussels" },
  { option: "Belize", value: "America/Belize" },
  { option: "Benin", value: "Africa/Porto-Novo" },
  { option: "Bermuda", value: "Atlantic/Bermuda" },
  { option: "Bhutan", value: "Asia/Thimphu" },
  { option: "Bolivia", value: "America/La_Paz" },
  { option: "Bosnia and Herzegovina", value: "Europe/Sarajevo" },
  { option: "Botswana", value: "Africa/Gaborone" },
  { option: "Brazil", value: "America/Sao_Paulo" },
  { option: "British Indian Ocean Territory", value: "Indian/Chagos" },
  { option: "Brunei", value: "Asia/Brunei" },
  { option: "Bulgaria", value: "Europe/Sofia" },
  { option: "Burkina Faso", value: "Africa/Ouagadougou" },
  { option: "Burundi", value: "Africa/Bujumbura" },
  { option: "Cameroon", value: "Africa/Douala" },
  { option: "Canada", value: "America/Toronto" },
  { option: "Cape Verde", value: "Atlantic/Cape_Verde" },
  { option: "Cayman Islands", value: "America/Cayman" },
  { option: "Comoros", value: "Indian/Comoro" },
  { option: "Central African Republic", value: "Africa/Bangui" },
  { option: "Central & Eastern Europe HQ", value: "Europe/Belgrade" },
  { option: "Chad", value: "Africa/Ndjamena" },
  { option: "Chile", value: "America/Santiago" },
  { option: "China", value: "Asia/Shanghai" },
  { option: "Christmas Island", value: "Indian/Christmas" },
  { option: "Cocos (Keeling) Islands", value: "Indian/Cocos" },
  { option: "Colombia", value: "America/Bogota" },
  { option: "Congo", value: "Africa/Brazzaville" },
  { option: "Congo, DRC", value: "Africa/Kinshasa" },
  { option: "Cook Islands", value: "Pacific/Rarotonga" },
  { option: "Costa Rica", value: "America/Costa_Rica" },
  { option: "Croatia", value: "Europe/Zagreb" },
  { option: "Cyprus", value: "Asia/Nicosia" },
  { option: "Czech Republic", value: "Europe/Prague" },
  { option: "Denmark", value: "Europe/Copenhagen" },
  { option: "Djibouti", value: "Africa/Djibouti" },
  { option: "Dominica", value: "America/Dominica" },
  { option: "Dominican Republic", value: "America/Santo_Domingo" },
  { option: "Ecuador", value: "America/Guayaquil" },
  { option: "Egypt", value: "Africa/Cairo" },
  { option: "El Salvador", value: "America/El_Salvador" },
  { option: "Equatorial Guinea", value: "Africa/Malabo" },
  { option: "Eritrea", value: "Africa/Asmara" },
  { option: "Estonia", value: "Europe/Tallinn" },
  { option: "Ethiopia", value: "Africa/Addis_Ababa" },
  { option: "Falkland Islands", value: "Atlantic/Stanley" },
  { option: "Fiji", value: "Pacific/Fiji" },
  { option: "Finland", value: "Europe/Helsinki" },
  { option: "France", value: "Europe/Paris" },
  { option: "French Polynesia", value: "Pacific/Tahiti" },
  { option: "French Southern Territories", value: "Indian/Kerguelen" },
  { option: "Gabon", value: "Africa/Libreville" },
  { option: "Gambia, The", value: "Africa/Banjul" },
  { option: "Georgia", value: "Asia/Tbilisi" },
  { option: "Germany", value: "Europe/Berlin" },
  { option: "Ghana", value: "Africa/Accra" },
  { option: "Greece", value: "Europe/Athens" },
  { option: "Grenada", value: "America/Grenada" },
  { option: "Guam", value: "Pacific/Guam" },
  { option: "Guatemala", value: "America/Guatemala" },
  { option: "Guinea", value: "Africa/Conakry" },
  { option: "Guinea-Bissau", value: "Africa/Bissau" },
  { option: "Gulf", value: "Asia/Dubai" },
  { option: "Guyana", value: "America/Guyana" },
  { option: "Heard and McDonald Islands", value: "Indian/Kerguelen" },
  { option: "Honduras", value: "America/Tegucigalpa" },
  { option: "Hong Kong SAR", value: "Asia/Hong_Kong" },
  { option: "Hungary", value: "Europe/Budapest" },
  { option: "Iceland", value: "Atlantic/Reykjavik" },
  { option: "India", value: "Asia/Kolkata" },
  { option: "Indian Ocean Territory", value: "Indian/Chagos" },
  { option: "Indonesia", value: "Asia/Jakarta" },
  { option: "Iraq", value: "Asia/Baghdad" },
  { option: "Ireland", value: "Europe/Dublin" },
  { option: "Isle of Man", value: "Europe/Isle_of_Man" },
  { option: "Israel", value: "Asia/Jerusalem" },
  { option: "Italy", value: "Europe/Rome" },
  { option: "Ivory Coast", value: "Africa/Abidjan" },
  { option: "Jamaica", value: "America/Jamaica" },
  { option: "Japan", value: "Asia/Tokyo" },
  { option: "Jordan", value: "Asia/Amman" },
  { option: "Kazakhstan", value: "Asia/Almaty" },
  { option: "Kenya", value: "Africa/Nairobi" },
  { option: "Kiribati", value: "Pacific/Tarawa" },
  { option: "Korea", value: "Asia/Seoul" },
  { option: "Kuwait", value: "Asia/Kuwait" },
  { option: "Latvia", value: "Europe/Riga" },
  { option: "Lebanon", value: "Asia/Beirut" },
  { option: "Lesotho", value: "Africa/Maseru" },
  { option: "Liberia", value: "Africa/Monrovia" },
  { option: "Libya", value: "Africa/Tripoli" },
  { option: "Lithuania", value: "Europe/Vilnius" },
  { option: "Luxembourg", value: "Europe/Luxembourg" },
  { option: "Macau SAR", value: "Asia/Macau" },
  { option: "Macedonia, FYRO", value: "Europe/Skopje" },
  { option: "Madagascar", value: "Indian/Antananarivo" },
  { option: "Malawi", value: "Africa/Blantyre" },
  { option: "Malaysia", value: "Asia/Kuala_Lumpur" },
  { option: "Maldives", value: "Indian/Maldives" },
  { option: "Mali", value: "Africa/Bamako" },
  { option: "Malta", value: "Europe/Malta" },
  { option: "Marshall Islands", value: "Pacific/Majuro" },
  { option: "Martinique", value: "America/Martinique" },
  { option: "Mauritius", value: "Indian/Mauritius" },
  { option: "Mayotte", value: "Indian/Mayotte" },
  { option: "Mexico", value: "America/Mexico_City" },
  { option: "Micronesia", value: "Pacific/Chuuk" },
  { option: "Moldova", value: "Europe/Chisinau" },
  { option: "Montenegro", value: "Europe/Podgorica" },
  { option: "Montserrat", value: "America/Montserrat" },
  { option: "Morocco", value: "Africa/Casablanca" },
  { option: "Mozambique", value: "Africa/Maputo" },
  { option: "Namibia", value: "Africa/Windhoek" },
  { option: "Nauru", value: "Pacific/Nauru" },
  { option: "Nepal", value: "Asia/Kathmandu" },
  { option: "Netherlands", value: "Europe/Amsterdam" },
  { option: "New Caledonia", value: "Pacific/Noumea" },
  { option: "New Zealand", value: "Pacific/Auckland" },
  { option: "Nicaragua", value: "America/Managua" },
  { option: "Niger", value: "Africa/Niamey" },
  { option: "Nigeria", value: "Africa/Lagos" },
  { option: "Niue", value: "Pacific/Niue" },
  { option: "Norfolk Island", value: "Pacific/Norfolk" },
  { option: "Northern Mariana Islands", value: "Pacific/Saipan" },
  { option: "Norway", value: "Europe/Oslo" },
  { option: "Oman", value: "Asia/Muscat" },
  { option: "Pakistan", value: "Asia/Karachi" },
  { option: "Palau", value: "Pacific/Palau" },
  { option: "Panama", value: "America/Panama" },
  { option: "Papua New Guinea", value: "Pacific/Port_Moresby" },
  { option: "Paraguay", value: "America/Asuncion" },
  { option: "Peru", value: "America/Lima" },
  { option: "Philippines", value: "Asia/Manila" },
  { option: "Pitcairn Islands", value: "Pacific/Pitcairn" },
  { option: "Poland", value: "Europe/Warsaw" },
  { option: "Portugal", value: "Europe/Lisbon" },
  { option: "Puerto Rico", value: "America/Puerto_Rico" },
  { option: "Qatar", value: "Asia/Qatar" },
  { option: "Reunion", value: "Indian/Reunion" },
  { option: "Romania", value: "Europe/Bucharest" },
  { option: "Russia", value: "Europe/Moscow" },
  { option: "Rwanda", value: "Africa/Kigali" },
  { option: "Samoa", value: "Pacific/Apia" },
  { option: "Sao Tome and Principe", value: "Africa/Sao_Tome" },
  { option: "Saudi Arabia", value: "Asia/Riyadh" },
  { option: "Senegal", value: "Africa/Dakar" },
  { option: "Serbia", value: "Europe/Belgrade" },
  { option: "Seychelles", value: "Indian/Mahe" },
  { option: "Sierra Leone", value: "Africa/Freetown" },
  { option: "Singapore", value: "Asia/Singapore" },
  { option: "Slovakia", value: "Europe/Bratislava" },
  { option: "Slovenia", value: "Europe/Ljubljana" },
  { option: "Solomon Islands", value: "Pacific/Guadalcanal" },
  { option: "Somalia", value: "Africa/Mogadishu" },
  { option: "South Africa", value: "Africa/Johannesburg" },
  { option: "Spain", value: "Europe/Madrid" },
  { option: "Sri Lanka", value: "Asia/Colombo" },
  { option: "St. Helena", value: "Africa/Abidjan" },
  { option: "St. Kitts and Nevis", value: "America/St_Kitts" },
  { option: "St. Lucia", value: "America/St_Lucia" },
  { option: "St. Pierre and Miquelon", value: "America/Miquelon" },
  { option: "St. Vincent and the Grenadines", value: "America/St_Vincent" },
  { option: "Suriname", value: "America/Paramaribo" },
  { option: "Swaziland", value: "Africa/Mbabane" },
  { option: "Sweden", value: "Europe/Stockholm" },
  { option: "Switzerland", value: "Europe/Zurich" },
  { option: "Taiwan", value: "Asia/Taipei" },
  { option: "Tanzania", value: "Africa/Dar_es_Salaam" },
  { option: "Thailand", value: "Asia/Bangkok" },
  { option: "Togo", value: "Africa/Lome" },
  { option: "Tokelau", value: "Pacific/Fakaofo" },
  { option: "Tonga", value: "Pacific/Tongatapu" },
  { option: "Trinidad and Tobago", value: "America/Port_of_Spain" },
  { option: "Tunisia", value: "Africa/Tunis" },
  { option: "Turkey", value: "Europe/Istanbul" },
  { option: "Turks and Caicos Islands", value: "America/Grand_Turk" },
  { option: "Tuvalu", value: "Pacific/Funafuti" },
  { option: "Uganda", value: "Africa/Kampala" },
  { option: "Ukraine", value: "Europe/Kiev" },
  { option: "United Arab Emirates", value: "Asia/Dubai" },
  { option: "United Kingdom", value: "Europe/London" },
  { option: "United States", value: "America/New_York" },
  { option: "Uruguay", value: "America/Montevideo" },
  { option: "Vanuatu", value: "Pacific/Efate" },
  { option: "Venezuela", value: "America/Caracas" },
  { option: "Vietnam", value: "Asia/Ho_Chi_Minh" },
  { option: "Virgin Islands", value: "America/St_Thomas" },
  { option: "Wallis and Futuna", value: "Pacific/Wallis" },
  { option: "Wallis and Futuna", value: "Pacific/Wallis" },
  { option: "Yemen", value: "Asia/Aden" },
  { option: "Zambia", value: "Africa/Lusaka" },
  { option: "Zimbabwe", value: "Africa/Harare" },
];

export const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const MonthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
