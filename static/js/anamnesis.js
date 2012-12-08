//if you are seeing gibrish here,
//change your browser to unicode, utf-8 encoding.
//in chrome this is done by going to the "wrench" menu, selecting tools, selecting encoding, then utf-8

var streetNames = [ 'כצנלסון', 'זבוטינסקי', 'הרצל', 'ויצמן' ];

var FEEDBACK_DOES_NOT_MATCH_CASE = "should not be asked";
var FEEDBACK_NONE = "";
var FEEDBACK_SHOULD_BE_ASKED = "should be asked";
var FEEDBACK_MUST = "must";
var cases = [
	{
		'intro': 'ירקון 77, בן {0} עם מצוקה נשימתית, {1}',
		'agemin': 5,
		'agemax': 100,
		'chapter': 'breath',
		'difficulty': 'classic',
		'condition': 'אסטמה',
		'answers': {
			1001: { 'answer': '"קשה לי לנשום."', 'feedback': FEEDBACK_MUST },
			2000: { 'answer': 'החולה יושב, רוכן קדימה, נשען על הידיים', 'feedback': FEEDBACK_MUST },
			2001: { 'answer': 'לא', 'feedback': FEEDBACK_MUST },
			2002: { 'answer': 'מצפצף', 'feedback': FEEDBACK_MUST },
			2004: { 'answer': '10', 'feedback': FEEDBACK_MUST },
			3001: { 'answer': '110', 'feedback': FEEDBACK_MUST },
			4009: { 'answer': 'לא', 'feedback': FEEDBACK_SHOULD_BE_ASKED },
			10001: { 'answer': '"ניקיתי אבק בבית"', 'feedback': FEEDBACK_MUST },
			10203: { 'answer': '"לא"', 'feedback': FEEDBACK_SHOULD_BE_ASKED },
			10401: { 'answer': '"כחצי שעה"', 'feedback': FEEDBACK_MUST },
			10701: { 'answer': '"משאף ונטולין"', 'feedback': FEEDBACK_MUST },
			10702: { 'answer': '"כן"', 'feedback': FEEDBACK_MUST },
			10801: { 'answer': '"אסטמה"', 'feedback': FEEDBACK_MUST },
			10802: { 'answer': '"אסטמה"', 'feedback': FEEDBACK_MUST },
			100002: { 'answer': 'נכון', 'feedback': FEEDBACK_MUST },
			100004: { 'answer': 'נכון', 'feedback': FEEDBACK_MUST },
		},
	},
	{
		'intro': 'ירקון 77, בן {0} עם מצוקה נשימתית, {1}',
		'agemin': 65,
		'agemax': 90,
		'chapter': 'breath',
		'difficulty': 'classic',
		'condition': 'דלקת ריאות',
		'answers': {
			1001: '"קשה לי לנשום."',
			2000: 'החולה שוכב',
			2001: 'לא',
			2002: 'מצפצף',
			2004: '24',
			3001: '120',
			3002: 'חיוור',
			3003: 'לח',
			3005: '100/70',
			3006: 'חם',
			10001: '"כלום"',
			10401: '"זה נבנה בהדרגה במשך 4 ימים"',
			10701: '"מיקרופירין"',
			10702: '"כן"',
			10802: 'לא',
			100001: 'נכון',
			100002: 'נכון',
			100011: 'נכון',
		},
		'must': [
			1,2,
			100001, 100002, 100011,

			1000,1001,1002,
			2000,2001,2002,2004,
			3001,3002,3003,3005,3006,
			10001, 10401,
			10601, 10701, 10702, 10801, 10802, 10803, 10901, 11001,
		]
	},
	{
		'intro': 'ירקון 77, בן {0} עם מצוקה נשימתית, {1}',
		'agemin': 70,
		'agemax': 90,
		'chapter': 'breath',
		'difficulty': 'classic',
		'condition': 'COPD',
		'answers': {
			1001: '"קשה לי לנשום."',
			2000: 'החולה שוכב',
			2001: 'לא',
			2002: 'מצפצף',
			2004: '24',
			3001: '120',
			3002: 'חיוור',
			3003: 'לח',
			3005: '100/70',
			3006: 'חם',
			10001: '"כלום"',
			10401: '"זה נבנה בהדרגה במשך 4 ימים"',
			10701: '"מיקרופירין"',
			10702: '"כן"',
			10802: 'לא',
			100001: 'נכון',
			100002: 'נכון',
			100011: 'נכון',
		},
		'must': [
			1,2,
			100001, 100002, 100011,

			1000,1001,1002,
			2000,2001,2002,2004,
			3001,3002,3003,3005,3006,
			10001, 10401,
			10601, 10701, 10702, 10801, 10802, 10803, 10901, 11001,
		]
	}
];

var defaultAnswers = {
	1: { 'answer': 'אין', 'feedback': FEEDBACK_MUST },
	2: { 'answer': 'נראה מקצוען', 'feedback': FEEDBACK_MUST },

	1000: { 'answer': '"שלום."', 'feedback': FEEDBACK_MUST },
	1001: { 'answer': 'לא עונה', 'feedback': FEEDBACK_MUST },
	1002: { 'answer': 'אין', 'feedback': FEEDBACK_MUST },

	2000: { 'answer': 'החולה יושב', 'feedback': FEEDBACK_MUST },
	2001: { 'answer': 'משלים משפטים כמו גדול', 'feedback': FEEDBACK_MUST },
	2002: { 'answer': 'לא', 'feedback': FEEDBACK_MUST },
	2003: { 'answer': 'לא', 'feedback': FEEDBACK_MUST },
	2004: { 'answer': '16', 'feedback': FEEDBACK_MUST },

	3001: { 'answer': 'תקין', 'feedback': FEEDBACK_MUST },
	3002: { 'answer': 'צבע עור רגיל', 'feedback': FEEDBACK_MUST },
	3003: { 'answer': 'לא', 'feedback': FEEDBACK_MUST },
	3004: { 'answer': 'תקין', 'feedback': FEEDBACK_MUST },
	3005: { 'answer': 'תקין', 'feedback': FEEDBACK_MUST },
	3006: { 'answer': 'רגיל', 'feedback': FEEDBACK_MUST },

	4001: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	4002: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	4003: { 'answer': '"כן"', 'feedback': FEEDBACK_NONE },
	4004: { 'answer': '"כן"', 'feedback': FEEDBACK_NONE },
	4005: { 'answer': 'חיוך תקין', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	4006: { 'answer': 'שווה', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	4007: { 'answer': 'שווה', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	4008: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	4009: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10001: undefined,
	10002: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	10003: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10101: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10201: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	10202: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	10203: { 'answer': '"לא"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	10204: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10301: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10401: undefined,
	10402: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	10403: { 'answer': '"לא כואב לי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10501: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	10502: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10601: { 'answer': '"אין"', 'feedback': FEEDBACK_MUST },
	
	10701: { 'answer': '"לא"', 'feedback': FEEDBACK_MUST },
	10702: { 'answer': '"לא לוקח תרופות"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	
	10801: { 'answer': '"כן"', 'feedback': FEEDBACK_MUST },
	10802: { 'answer': '"לא"', 'feedback': FEEDBACK_MUST },
	10803: { 'answer': '"לא"', 'feedback': FEEDBACK_MUST },
	10804: { 'answer': '"לא התאשפזתי"', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },

	10901: { 'answer': '"לפני כמה שעות"', 'feedback': FEEDBACK_MUST },

	11001: { 'answer': '"בסדר"', 'feedback': FEEDBACK_MUST },

	100000: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100001: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100002: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100004: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100005: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100006: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100007: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100008: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100009: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100010: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
	100011: { 'answer': '', 'feedback': FEEDBACK_DOES_NOT_MATCH_CASE },
};

var schemas = {
	'patient': [
		"Safety",
		"<b>A</b>irway",
		"<b>B</b>reath",
		"<b>C</b>irculation",
		"<b>D</b>isability",
		"<b>T</b>reatment and Transport"
	],
	'anamnesis': [
		"S&amp;S: <b>P</b>rovokes",
		"S&amp;S: <b>Q</b>uality",
		"S&amp;S: <b>R</b>egion",
		"S&amp;S: <b>R</b>adiation",
		"S&amp;S: <b>R</b>isk Factors",
		"S&amp;S: <b>S</b>everity",
		"S&amp;S: <b>T</b>iming",
		"S&amp;S: Associated S&amp;S",
		"<b>A</b>llergies",
		"<b>M</b>edication",
		"<b>P</b>ertinent Past Medical History",
		"<b>L</b>ast Oral Intake",
		"<b>E</b>vents leading to injury or illness"
	]
};
var schemasInHebrew = {
	'patient': 'סכימת טיפול בחולה',
	'anamnesis': 'סכימת אנמנזה'
};

var interactions = [
	'שאל על הסביבה',
	'פעל',
	'פנה לאיש צוות',
	'פנה לחולה',
	'פנה לחולה לגבי כאב',
	'התרשם',
	'מדוד',
	'פנה למלווה',
];

var commands = [
	{ 'command': 'האם יש גורמים מסכנים?', 'key': 1, 'schema': 'patient', 'schemaorder': 0, 'interaction': 0 },
	{ 'command': 'שם כפפות', 'key': 2, 'schema': 'patient', 'schemaorder': 0, 'interaction': 1 },

	{ 'command': '"שלום אדוני, אני X ממגן דוד"', 'key': 1000, 'schema': 'patient', 'schemaorder': 1, 'interaction': 3 },
	{ 'command': '"מה מפריע לך?"', 'key': 1001, 'schema': 'patient', 'schemaorder': 1, 'interaction': 3 },
	{ 'command': 'יש איום על נתיב אוויר?', 'key': 1002, 'schema': 'patient', 'schemaorder': 1, 'interaction': 5 },

	{ 'command': 'מהי תנוחת החולה?', 'key': 2000, 'schema': 'patient', 'schemaorder': 2, 'interaction': 5 },
	{ 'command': 'האם החולה משלים משפטים?', 'key': 2001, 'schema': 'patient', 'schemaorder': 2, 'interaction': 5 },
	{ 'command': 'האם החולה משמיע קולות נשימה חריגים?', 'key': 2002, 'schema': 'patient', 'schemaorder': 2, 'interaction': 5 },
	{ 'command': 'האם החולה כחול בשפתיים?', 'key': 2003, 'schema': 'patient', 'schemaorder': 2, 'interaction': 5 },
	{ 'command': 'הנחה איש צוות למדוד קצב נשימה', 'key': 2004, 'schema': 'patient', 'schemaorder': 2, 'interaction': 2 },

	{ 'command': 'מה הדופק של החולה?', 'key': 3001, 'schema': 'patient', 'schemaorder': 3, 'interaction': 6 },
	{ 'command': 'מה צבע העור של החולה?', 'key': 3002, 'schema': 'patient', 'schemaorder': 3, 'interaction': 5 },
	{ 'command': 'האם מזיע?', 'key': 3003, 'schema': 'patient', 'schemaorder': 3, 'interaction': 5 },
	{ 'command': 'מילוי קפילרי תקין?', 'key': 3004, 'schema': 'patient', 'schemaorder': 3, 'interaction': 6 },
	{ 'command': 'הנחה איש צוות למדוד לחץ דם', 'key': 3005, 'schema': 'patient', 'schemaorder': 3, 'interaction': 2 },
	{ 'command': 'התרשמות מטמפרטורת החולה', 'key': 3006, 'schema': 'patient', 'schemaorder': 3, 'interaction': 5 },

	{ 'command': 'האם החולה הגיב לקול?', 'key': 4001, 'schema': 'patient', 'schemaorder': 4, 'interaction': 3 },
	{ 'command': 'האם החולה הגיב לכאב?', 'key': 4002, 'schema': 'patient', 'schemaorder': 4, 'interaction': 1 },
	{ 'command': 'האם האישונים סימטריים?', 'key': 4003, 'schema': 'patient', 'schemaorder': 4, 'interaction': 5 },
	{ 'command': 'האם האישונים מגיבים לאור?', 'key': 4004, 'schema': 'patient', 'schemaorder': 4, 'interaction': 5 },
	{ 'command': '"תחייך בשבילי"', 'key': 4005, 'schema': 'patient', 'schemaorder': 4, 'interaction': 3 },
	{ 'command': '"תלחץ על הידיים שלי באופן שווה"', 'key': 4006, 'schema': 'patient', 'schemaorder': 4, 'interaction': 3 },
	{ 'command': '"תרים בבקשה את שתי הידיים בגובה שווה מולך"', 'key': 4007, 'schema': 'patient', 'schemaorder': 4, 'interaction': 3 },
	{ 'command': 'הנחה איש צוות לבדוק סוכר', 'key': 4008, 'schema': 'patient', 'schemaorder': 4, 'interaction': 2 },
	{ 'command': 'האם לחולה יש תליון או צמיד רפואי?', 'key': 4009, 'schema': 'patient', 'schemaorder': 4, 'interaction': 0 },

	{ 'command': '"מה קרה שזה התחיל?"', 'key': 10001, 'schema': 'anamnesis', 'schemaorder': 0, 'interaction': 3 },
	{ 'command': '"תרכון קדימה. האם הכאב חזק או חלש יותר?"', 'key': 10002, 'schema': 'anamnesis', 'schemaorder': 0, 'interaction': 4 },
	{ 'command': '"תריםק ידיים. האם הכאב חזק או חלש יותר?"', 'key': 10003, 'schema': 'anamnesis', 'schemaorder': 0, 'interaction': 4 },

	{ 'command': '"הכאב שאתה מרגיש, האם הוא לוחץ, שורף או דוקר?"', 'key': 10101, 'schema': 'anamnesis', 'schemaorder': 1, 'interaction': 4 },

	{ 'command': '"איפה כואב לך?"', 'key': 10201, 'schema': 'anamnesis', 'schemaorder': 2, 'interaction': 4 },
	{ 'command': '"כואב לך בעוד מקומות?"', 'key': 10202, 'schema': 'anamnesis', 'schemaorder': 3, 'interaction': 4 },

	{ 'command': '"מעשן?"', 'key': 10203, 'schema': 'anamnesis', 'schemaorder': 4, 'interaction': 3 },
	{ 'command': '"סובל מסוכרת?"', 'key': 10204, 'schema': 'anamnesis', 'schemaorder': 4, 'interaction': 3 },

	{ 'command': '"מ1 עד 10, כמה כואב לך?"', 'key': 10301, 'schema': 'anamnesis', 'schemaorder': 5, 'interaction': 4 },

	{ 'command': '"כמה זמן הכאב/התלונה נמשך?"', 'key': 10401, 'schema': 'anamnesis', 'schemaorder': 6, 'interaction': 3 },
	{ 'command': '"הכאב השתנה עם הזמן?"', 'key': 10402, 'schema': 'anamnesis', 'schemaorder': 6, 'interaction': 4 },
	{ 'command': '"מתי הכאב הגיע לשיא?"', 'key': 10403, 'schema': 'anamnesis', 'schemaorder': 6, 'interaction': 4 },

	{ 'command': '"הכאת?"', 'key': 10501, 'schema': 'anamnesis', 'schemaorder': 7, 'interaction': 3 },
	{ 'command': '"אתה מרגיש בחילה?"', 'key': 10502, 'schema': 'anamnesis', 'schemaorder': 7, 'interaction': 3 },

	{ 'command': '"האם יש לך אלרגיות?"', 'key': 10601, 'schema': 'anamnesis', 'schemaorder': 8, 'interaction': 3 },

	{ 'command': '"נוטל תרופות על בסיס קבוע?"', 'key': 10701, 'schema': 'anamnesis', 'schemaorder': 9, 'interaction': 3 },
	{ 'command': '"לקחת את התרופות שלך היום?"', 'key': 10702, 'schema': 'anamnesis', 'schemaorder': 9, 'interaction': 3 },

	{ 'command': '"בריא בדרך כלל?"', 'key': 10801, 'schema': 'anamnesis', 'schemaorder': 10, 'interaction': 3 },
	{ 'command': '"יש מחלות שאתה סובל מהן?"', 'key': 10802, 'schema': 'anamnesis', 'schemaorder': 10, 'interaction': 3 },
	{ 'command': '"האם התאשפזת לאחרונה?"', 'key': 10803, 'schema': 'anamnesis', 'schemaorder': 10, 'interaction': 3 },
	{ 'command': '"אפשר לראות מכתב שחרור?"', 'key': 10804, 'schema': 'anamnesis', 'schemaorder': 10, 'interaction': 3 },

	{ 'command': '"מתי אכלת לאחרונה?"', 'key': 10901, 'schema': 'anamnesis', 'schemaorder': 11, 'interaction': 3 },

	{ 'command': '"איך הרגשת בימים האחרונים?"', 'key': 11001, 'schema': 'anamnesis', 'schemaorder': 11, 'interaction': 3 },

/*
	{ 'command': '"מה מצב ההכרה הבסיסי שלו?"', 'interaction': 7 },
	{ 'command': '"אתה סובל מיתר לחץ דם?"', 'interaction': 3 },
	{ 'command': '"אתה סובל מסכרת?"', },
	{ 'command': '"אתה משען?"', },
	{ 'command': '"היה במשפחה אירוע למישהו במשפחה?"', },
	{ 'command': '"בדרך כלל מאוזן בסוכר?"', },
	{ 'command': '"היו לך מים בריאות?"', },
	{ 'command': '"עישנת סיגריה רגילה, או משהו אחר? אל תדאג, אני לא מהמשטרה."', },
	{ 'command': '"האם אתה מרגיש נמלול בידיים או בשפתיים?"', },
	{ 'command': '"האם אתה מטופל בחמצן בבית?"', },
	{ 'command': '"האם אתה מרותק, או הולך, לאחרונה?"', },
	{ 'command': '"האם נותחת לאחרונה?"', },
	{ 'command': '"יש דימומים פעילים?"', },
	{ 'command': '"האם יש לך אולקוס?"', },
	{ 'command': '"האם יש לך טחורים?"', },
	{ 'command': '"האם התאמצת היום יותר או פחות מהרגיל?"', },
לראין את הסבתא
האם שתה
לפנות
עודף משקך
תזונה לקויה
היסטוריה צנטור
*/

	{ 'command': 'להשכיב את החולה', 'key': 100000, 'interaction': 1 },
	{ 'command': 'להושיב את החולה', 'key': 100001, 'schema': 'patient', 'schemaorder': 2, 'interaction': 1 },
	{ 'command': 'הנחה איש צוות לספק חמצן', 'key': 100002, 'schema': 'patient', 'schemaorder': 2, 'interaction': 2 },
	{ 'command': 'הזמנת נטן', 'key': 100004, 'interaction': 1 },
	{ 'command': 'להרים את הרגליים של החולה', 'key': 100005, 'interaction': 1 },
	{ 'command': 'להשים כרית מתחת לראש של החולה', 'key': 100006, 'interaction': 1 },
	{ 'command': 'להניח מגברת רטובה על הבטן של החולה', 'key': 100007, 'interaction': 1 },
	{ 'command': 'להחדיר מנתב אוויר', 'key': 100008, 'interaction': 1 },
	{ 'command': 'פתיחת נתיב אוויר בשיטת מצח סנטר', 'key': 100009, 'interaction': 1 },
	{ 'command': 'להודיע לבית החולים על המקרה', 'key': 100010, 'interaction': 1 },
	{ 'command': 'פינוי דחוף לבית חולים', 'key': 100011, 'interaction': 1 },
];
