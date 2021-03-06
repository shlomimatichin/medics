//if you are seeing gibrish here,
//change your browser to unicode, utf-8 encoding.
//in chrome this is done by going to the "wrench" menu, selecting tools, selecting encoding, then utf-8
var questions = [
		{	'type':	'whichiswhich',
			'questions': [ { 'question': 'באיזה עורק נבדוק דופק לבוגר מחוסר הכרה',
							'answer': 'בעורק הקרוטיד', } ,
						  { 'question': 'באיזה עורק נבדוק דופק לבוגר בהכרה',
							'answer': 'בעורק הרדיאלי', } ,
						  { 'question': 'באיזה עורק נבדוק דופק לילד מחוסר הכרה',
							'answer': 'בעורק הקרוטיד', } ,
						  { 'question': 'באיזה עורק נבדוק דופק לילד בהכרה',
							'answer': 'בעורק הרדיאלי', } ,
						  { 'question': 'באיזה עורק נבדוק דופק לתינוק מחוסר הכרה',
							'answer': 'בעורק הבירכיאלי או הפמורלי', } ,
						  { 'question': 'באיזה עורק נבדוק דופק לתינוק בהכרה',
							'answer': 'בעורק הבירכיאלי או הפמורלי', } ],
			'chapter': 'cpr' },
		{	'type': 'whichiswhich',
			'questions': [ { 'question': 'שם עורק הצוואר', 'answer': 'הקרוטיד' },
					{ 'question': 'שם עורק האגודל', 'answer': 'הרדיאלי' },
					{ 'question': 'שם עורק הרגל', 'answer': 'הפמוראלי' },
					{ 'question': 'שם עורק שריר היד', 'answer': 'הברכיאלי' } ],
			'chapter': 'cpr' },
		{	'type': 'numberRange',
			'question': 'מהו משך בדיקת הדופק בהחייאה, בשניות',
			'answermin': 5,
			'answermax': 10,
			'chapter': 'cpr' },
		{	'type': 'whichiswhich',
			'questions': [ { 'question': 'יחס העיסויים למבוגר',
							'answer': '30:2', },
						  { 'question': 'יחס העיסויים לילד, עם מטפל בודד',
							'answer': '30:2', } ,
						  { 'question': 'יחס העיסויים לילד, עם זוג מטפלים',
							'answer': '15:2', } ,
						  { 'question': 'יחס העיסויים לתינוק, עם מטפל בודד',
							'answer': '30:2', } ,
						  { 'question': 'יחס העיסויים לתינוק, עם זוג מטפלים',
							'answer': '15:2', } ,
						  { 'question': 'יחס העיסויים לילוד, עם מטפל בודד',
							'answer': '3:1', },
						  { 'question': 'יחס העיסויים לילוד, עם זוג מטפלים',
							'answer': '3:1', } ],
			'chapter': 'cpr' },
		{	'type': 'whichiswhich',
			'questions': [ { 'question': 'מבוגר עם דופק שאינו נושם יונשם אחת לכמה שניות',
							'answer': '5', },
						  { 'question': 'ילד עם דופק שאינו נושם יונשם אחת לכמה שניות',
							'answer': '4', } ,
						  { 'question': 'תינוק עם דופק שאינו נושם יונשם אחת לכמה שניות',
							'answer': '3', } ],
			'chapter': 'cpr' },
		{	'type': 'whichiswhich',
			'questions': [ { 'question': 'עומק הלחיצה בהחייאת מבוגר',
							'answer': '5 ס"מ', },
						  { 'question': 'עומק הלחיצה בהחייאת ילד',
							'answer': '4 ס"מ', } ,
						  { 'question': 'עומק הלחיצה בהחייאת תינוק',
							'answer': '4 ס"מ', } ],
			'chapter': 'cpr' },
		{	'type': 'whichiswhich',
			'questions': [ { 'question': 'שיטת הלחיצה בהחייאת מבוגר',
							'answer': 'שתי ידיים', },
						  { 'question': 'שיטת הלחיצה בהחייאת ילד',
							'answer': 'יד אחת', } ,
						  { 'question': 'שטית הלחיצה בהחייאת תינוק',
							'answer': 'שני אצבעות', } ],
			'chapter': 'cpr' },
		{	'type': 'trueorfalse',
			'question': 'הדפיברילטור נתן שוק. יש לבדוק דופק',
			'true': 0,
			'chapter': 'cpr' },
		{	'type': 'trueorfalse',
			'question': 'המחוסר הכרה מקיא. יש לעצור את ההחיאה',
			'true': 1,
			'chapter': 'cpr' },
		{	'type': 'trueorfalse',
			'question': 'המחוסר הכרה הקיא. יש לבדוק דופק',
			'true': 1,
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'משך ניקוי ההפרשות המקסימאלי בהחייאה, בשניות',
			'answer': 10,
			'chapter': 'cpr' },
		{	'type': 'trueorfalse',
			'question': 'לחבר דפיברילטור בכל מקרה לחולה מחוסר הכרה',
			'true': 0,
			'chapter': 'cpr' },
		{	'type': 'trueorfalse',
			'question': 'אסור לחבר דפיברילטור לחולה עם דופק',
			'true': 1,
			'chapter': 'cpr' },
		{	'type': 'trueorfalse',
			'question': 'בהחייאת ילדים או תינוקות על רקע אספיקציה, במטפל בודד, יש לסיים סבב לפני קריאה לעזרה וחיבור דפיברילטור',
			'true': 1,
			'chapter': 'cpr' },
		{	'type': 'list',
			'question': 'באילו מקרים אין לבצע לחיצות בטן, אלא דחיקות חזה',
			'list': [ 'אשה הרה', 'אדם שמן', 'מרותק למיטה או כסא גלגלים', 'תינוק עד גיל שנה' ],
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'נפח מיכל H בליטרים',
			'answer': 20,
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'נפח מיכל D בליטרים',
			'answer': 2.4,
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'יחס המרה PSI לאטמוספרה',
			'answer': 15,
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'זרימת אוויר מינימאלית לכיוון בברז חמצן, בLPM',
			'answer': 10,
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'קו אדום לשימוש מיכל H',
			'answer': 30,
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'קו אדום לשימוש מיכל D (לא תחנות מרוחקות)',
			'answer': 45,
			'chapter': 'cpr' },
		{	'type': 'numberExact',
			'question': 'קו אדום לשימוש מיכל D, בתחנות מרוחקות',
			'answer': 70,
			'chapter': 'cpr' },
		{	'type': 'list',
			'question': 'מהם המדדים',
			'list': [ 'חום', 'נשימה', 'דופק', 'עור', 'מילוי קפילארי', 'לחץ דם' ],
			'chapter': 'patient' },
		{	'type': 'numberExact',
			'question': 'בדיקת קצב נשימה אורכה בשניות',
			'answer': 30,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'קצב נשימה תקין במבוגר',
			'answermin': 12,
			'answermax': 20,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'קצב נשימה תקין בילד',
			'answermin': 18,
			'answermax': 30,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'קצב נשימה תקין בתינוק',
			'answermin': 22,
			'answermax': 60,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'קצב נשימה תקין בילוד',
			'answermin': 40,
			'answermax': 60,
			'chapter': 'patient' },
		{	'type': 'numberExact',
			'question': 'מדידת דופק אורכה בשניות',
			'answer': 15,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'קצב דופק תקין במבוגר',
			'answermin': 60,
			'answermax': 100,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'קצב דופק תקין בילד',
			'answermin': 90,
			'answermax': 120,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'קצב דופק תקין בתינוק או ילוד',
			'answermin': 125,
			'answermax': 130,
			'chapter': 'patient' },
		{	'type': 'whichiswhich',
			'questions': [ { 'question': 'צבע עור כחול מצביע על',
							'answer': 'חוסר חימצון', },
						  { 'question': 'עור חיוור מצביע על',
							'answer': 'זילוח פריפרי ירוד, כיווץ כלי דם', } ,
						  { 'question': 'עור לח וקר מצביע על',
							'answer': 'אדרנלין, זיעה קרה', } ,
						  { 'question': 'עור לח וחם מצביע על',
							'answer': 'מאמץ פיזי', } ,
						  { 'question': 'עור חם ויבש מצביע על',
							'answer': 'חום, זיהום', } ,
						  { 'question': 'עור אדום',
							'answer': 'חום, הרחבת כלי הדם', } ],
			'chapter': 'patient' },
		{	'type': 'numberExact',
			'question': 'ערך תקין לזילוח דם הוא עד (בשניות)',
			'answer': 2,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'לחץ דם סיסטולי תקין במבוגר',
			'answermin': 90,
			'answermax': 140,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'לחץ דם סיסטולי תקין בילד',
			'answermin': 90,
			'answermax': 110,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'לחץ דם סיסטולי תקין בתינוק',
			'answermin': 60,
			'answermax': 90,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'לחץ דם דיאסטולי תקין במבוגר',
			'answermin': 60,
			'answermax': 90,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'לחץ דם דיאסטולי תקין בילד',
			'answermin': 50,
			'answermax': 80,
			'chapter': 'patient' },
		{	'type': 'numberRange',
			'question': 'לחץ דם דיאסטולי תקין בתינוק',
			'answermin': 40,
			'answermax': 60,
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'הסבב הראשוני בטיפול בחולה',
			'list': [ 'Safety', 'Airway', 'Breathing', 'Circulation', 'Disability', 'T&T' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'הסבב המשלים בטיפול בחולה',
			'list': [ 'ABC הערכה חוזרת', 'Diagnose - אבחנה, טיפול ורישמוים', 'Evacuation' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'בשלב הAirway בטיפול בחולה',
			'list': [ 'התרשם מרמת ההכרה ותלונת החולה', 'התרשם האם יש איום על נתיב האוויר' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'בשלב הBreathing בטיפול בחולה',
			'list': [ 'תנוחת החולה', 'יכולת דיבור (משלים משפטים)', 'קולות נשימה חריגים', 'כחלון (פריפרי או מרכזי, בלשון)', 'ספק חמצן במידת הצורך',
						'סיוע נשימתי או הנשמה במידת הצורך' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'בשלב הCirculation בטיפול בחולה',
			'list': [ 'בדיקת דופק פריפרי או מרכזי', 'הערך מצב המודינמי - דופק, צבע ומילוי קפילרי', 'לחץ דם' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'בשלב הDisability בטיפול בחולה',
			'list': [ 'בדיקת אישונים', 'דיבור, חיוך, תנועות גפיים', 'בדיקת סוכר' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'בשלב הTnT בטיפול בחולה, הגורמים לפינוי דחוף',
			'list': [ 'איום על ABC', 'בכל שינוי במצב הכרה', 'חולה לא יציב', 'בצע פעולות במידת האפשר בדרך לבית החולים' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'אנמנזה: שלב הסימנים והסימפטומים',
			'list': [ 'Provokes', 'Quality', 'Region, Radiation, Risk factors', 'Severity', 'Timing', 'Associated Signs / Symptoms' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'אנמנזה: שלב הסימנים והסימפטומים, מפורט',
			'list': [ 'Provokes - מה גרם לכאב או תלונה? מה מקל או משנה אותו?', 'Quality - איכות הכאב או תלונה',
						'Region, Radiation, Risk factors', 'Severity - ישנה הטבה? סקאלת כאב?', 'Timing - מתי התחיל? כמה זמן? מתי הגיע לשיא?',
						'Associated Signs / Symptoms - חיוורון, זיעה, בחילות, הקאות' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'סכמת אנמנזה',
			'list': [ 'Sign and Symptoms (PQRST)', 'Allergies', 'Medication (and followthrough)',
						'Pertinent past medial history (letter from hospital)', 'Last oral intake', 'Events leading to injury or illness' ],
			'chapter': 'patient' },
		{	'type': 'list',
			'question': 'מחזור הדם',
			'list': [ 'חדר שמאל', 'אאורטה', 'עורקי הגוף', 'נימין', 'שחלוף גזים בתאים', 'ורידים', 'וריד נבוב עליון / תחתון', 'עליה ימין', 
						'חדר ימין', 'העורק הפולמונרי', 'ריאות', 'שחלוף גזים', 'ורידי הריאה', 'עליה שמאל' ],
			'chapter': 'cardio' },
		{	'type': 'list',
			'question': 'גורמי סיכון לטרשת העורקים',
			'list': [ 'סכרת', 'יתר לחץ דם', 'מתח נפשי', 'חוסר פעילות גופנית', 'עישון', 'תזונה לקויה', 'עודף כולסטרול', 'עודף משקל', 'גיל', 'מין', 'תורשה' ],
			'chapter': 'cardio' },
		{	'type': 'list',
			'question': 'גורמים לאי ספיקת לב',
			'list': [ 'אוטם בשריר הלב', 'מחלות שריר הלב', 'תסחיף ריאתי', 'פריקרדיטיס' ],
			'chapter': 'cardio' },
		{	'type': 'numberExact',
			'question': 'אחוז החמצן באוויר (לא מועשר)',
			'answer': 21,
			'chapter': 'breath' },
		{	'type': 'numberExact',
			'question': 'אחוז החנקן באוויר (לא מועשר)',
			'answer': 78,
			'chapter': 'breath' },
		{	'type': 'numberExact',
			'question': 'נפח האוויר הממוצע הנשאף בנשימה אחת, בcc',
			'answer': 500,
			'chapter': 'breath' },
		{	'type': 'numberExact',
			'question': 'נפח האוויר מת, בcc',
			'answer': 150,
			'chapter': 'breath' },
		{	'type': 'trueorfalse',
			'question': 'אם לחולה יש לחץ דם נמוך, אפשר לעזור לזרימת הדם למוח על ידי הרמת הרגליים',
			'true': 1,
			'chapter': 'cpr' },
		{	'type': 'trueorfalse',
			'question': 'אם לחולה יש לחץ דם גבוה, אפשר לעזור לזרימת הדם למוח על ידי הרמת הרגליים',
			'true': 0,
			'chapter': 'cpr' },
		{	'type': 'numberRange',
			'question': 'רמת סוכר תקינה בדם',
			'answermin': 70,
			'answermax': 110,
			'chapter': 'patient' },
];
var conditions = [
		{ 	'condition': 'השתנקות קלה',
			'definition': 'חסימה חלקית של קנה הנשימה עם מעבר מספק של אוויר',
			'chapter': 'cpr',
			'signs': [ 'מתלונן על חנק', 'החולה מסוגל לדבר', 'משתעל שיעול יעיל', 'נושם' ],
			'treatment': [ 'לא להתערב', 'יש לעודד שיעול', 'פינוי דחוף תוך כדי ניטור', 'אם מחמיר במהלך הפיוני לטפל כהשתנקות חמורה' ], },
		{ 	'condition': 'השתנקות חמורה',
			'definition': 'חסימה מלאה או חסימה חלקית עם מעבר אויר לא מספק',
			'chapter': 'cpr',
			'signs': [ 'החולה לא מסוגל לדבר', 'משתעל שיעול לא יעיל, שקט', 'לא נושם', 'ירידה ברמת הכרה' ],
			'treatment': [ 'חסר הכרה - החייאה ללא בדיקת דופק', 'בהכרה - וודא השתנקות', 'בדוק את חלל הפה', '6-10 לחיצות ברום הבטן' ], },
		{ 	'condition': 'השתנקות קלה בתינוק',
			'definition': 'חסימה חלקית של קנה הנשימה עם מעבר מספק של אוויר',
			'chapter': 'cpr',
			'signs': [ 'שחלוף אוויר ירוד', 'מאמץ נשימתי גובר', 'כיחלון', 'חוסר יכולת לבכות או לנשום' ],
			'treatment': [ 'לוודא השתנקות', 'מבט לפה', 'עידוד שיעול במידת האפשר', 'מבט לפה', '4-6 טפיחות בין השכמות', 'חוזר חלילה' ], },
		{ 	'condition': 'השתנקות חמורה בילדים',
			'definition': 'חסימה מלאה או חסימה חלקית עם מעבר אויר לא מספק',
			'chapter': 'cpr',
			'signs': [ 'החולה לא מסוגל לדבר', 'משתעל שיעול לא יעיל, שקט', 'לא נושם', 'ירידה ברמת הכרה' ],
			'treatment': [ 'חסר הכרה - החייאה ללא בדיקת דופק', 'בהכרה - וודא השתנקות', 'בדוק את חלל הפה', '4-6 טפיחות בין השכמות (אם ניתן להפוך את הילד)',
							'בדוק את חלל הפה', '4-6 לחיצות ברום הבטן', 'חוזר חלילה' ], },
		{ 	'condition': 'השתנקות חמורה בתינוקות',
			'definition': 'חסימה מלאה או חסימה חלקית עם מעבר אויר לא מספק',
			'chapter': 'cpr',
			'signs': [ 'שחלוף אוויר ירוד', 'מאמץ נשימתי גובר', 'כיחלון', 'חוסר יכולת לבכות או לנשום' ],
			'treatment': [ 'חסר הכרה - החייאה ללא בדיקת דופק', 'בהכרה - וודא השתנקות', 'בדוק את חלל הפה', '4-6 טפיחות בין השכמות (אם ניתן להפוך את הילד)',
							'בדוק את חלל הפה', '4-6 לחיצות ברום הבטן', 'חוזר חלילה' ], },
		{ 	'condition': 'תעוקת חזה יציבה',
			'definition': 'חסימה חלקית בעורקים הכלילים',
			'chapter': 'cardio',
			'signs': [ 'כאב מוכר בחזה המופיע בדרך כלל לאחר מאמץ גופני', 'בדרך כלל כאב שחולף לאחר 5-15 דקות של מנוחה', 'חולף לאחר לקיחת תרופות' ],
			'treatment': [], },
		{ 	'condition': 'אוטם בשריר הלב (או תעוקת חזה בלתי יציבה)',
			'definition': 'חסימה מלאה בעורקים בכלילים הגורמת לנמק בשכבת המיוקרד (או חלקית בתעוקת חזה)',
			'chapter': 'cardio',
			'signs': [ 'כאב לוחץ בחזה', 'יתכן קושי נשימה', 'חיוורון והזעה', 'בחילות, הכאות', 'הקרנת הכאב',
						'מתחיל בפתאומיות', 'לא חולף לאחר כמה דקות', 'חזק מתעוקת חזה יציבה', 'כאב לא משתנה במגע / נשימה / שינוי תנוהח',
						'לחץ וחרדה', 'חולשה קיצונית', 'דפיקות לב (הפרעות קצב)', 'דופק ולחץ דם אינם מאבחנים' ],
			'treatment': [ 'הזמנת נטן במקביל לטיפול', 'הרגעה', 'מתן חמצן', 'מתן אספירין 300mg בלעיסה' ], },
		{ 	'condition': 'אי ספיקת לב ימין',
			'definition': 'בעקבות חוסר תפקוד הלב הלחץ בורידים עולה והחלק הנוזלי של הדם יוצא מכלי הדם וגורם לבצקות בגפיים',
			'chapter': 'cardio',
			'signs': [ 'בצקות בגפיים', 'גודש ורידי צוואר' ],
			'treatment': [ 'אין טיפול נחוץ ברמת השטח', 'אין סכנות משמעותיות' ], },
		{ 	'condition': 'בקצת ריאות (אי ספיקת לב שמאל)',
			'definition': 'בעקבות חוסר תפקוד הלב הלחץ בורידים עולה והחלק הנוזלי של הדם יוצא מכלי הדם וגורם לבצקות בריאות',
			'chapter': 'cardio',
			'signs': [ 'סימני מצוקה נשימתית', 'חיוורון וזיעה קרה (במקרים חמורים ציאנוזיס)', 'חירחורים לחים', 'לחץ דם בדרך כלל גבוה', 'דופק מהיר' ],
			'treatment': [ 'הזמנת נטן', 'הרגעה והושבה', 'שמירה על ABC', 'מתן חמצן', 'התחלת פינוי' ], },
//אין אספירין בבצקת ריאות?
		{ 	'condition': 'שוק קרדיוגני (אי ספיקת לב שמאל)',
			'definition': 'בעקבות חוסר תפקוד הלב הלחץ בורידים עולה והחלק הנוזלי של הדם יוצא מכלי הדם וגורם לבצקות בריאות',
			'chapter': 'cardio',
			'signs': [ 'אותם וסימנים של בצקת ריאות ובנוסף:', 'נשימות איטיות יחיסת', 'דופק איטי', 'לחץ דם נמוך (יחסית לאי ספיקה, מתחת מאה)' ],
			'treatment': [ 'הטיפול זהה, באטן יש יותר אמצעים' ], },
		{ 	'condition': 'מפרצת אאורטלית',
			'definition': 'התנפחות של האאורטה (בדרך כלל באאורטה בטנית)',
			'chapter': 'cardio',
			'signs': [ 'בהתחלה, ללא סימנים או סימפטומים', 'בדרך כלל תוגשנה פעימות באיזור הנפוח' ],
			'treatment': [], },
		{ 	'condition': 'דיסקציה',
			'definition': 'הפרדות שכבות כלי הדם אחת מהשניה (המדיה מהאדוונטיציה)',
			'chapter': 'cardio',
			'signs': [ 'יתכנו כאבים דוקרים בחזה ובגב', 'כאבים חותכים במופיעים בגלים בהתאם לפעימות הלב', 'יתכנו הפרדשים בדפקים ולחץ הדם בין הגפיים' ],
			'treatment': [], },
		{ 	'condition': 'קרע האאורטה',
			'definition': 'קריעה של דופן האאורטה, בדרך כלל מאנוריזמה שהתפוצצה או טראומה',
			'chapter': 'cardio',
			'signs': [ 'כאב עז ודוקר בגב בהתאם לפעימות הלב' ],
			'treatment': [], },
		{ 	'condition': 'חרדה ולחץ נפשי',
			'definition': '',
			'chapter': 'cardio',
			'signs': [ 'כאבים בחזה', 'טכיפניאה' ],
			'treatment': [ 'אם יש ספק, אין ספק' ], },
		{ 	'condition': 'כאב ממקור מוסקוסקלטלי בחזה',
			'definition': 'כאב שמקורו בשרירים או בשלד',
			'chapter': 'cardio',
			'signs': [ 'כאב נקודתי, בדרך כלל דוקר ולא לוחץ', 'כאב המתגבר/משתנה בנשימה/מגע/בתנועה', 'אינו מלווה בחיוורון או הזעה, בדרך כלל', 'בדרך כלל הכאב לא חזק כמו אוטם' ],
			'treatment': [], },
		{ 	'condition': 'כאב ממקור גסטרואיטסטינלי בחזה',
			'definition': 'כאב הנוסע ממערכת העיקול ולעיתים מורגש באיזור החזה',
			'chapter': 'cardio',
			'signs': [ 'הכאב יוחמר בלחיצה באיזור הקיבה', 'לעיתים יללוה בבחילות, הקאות וצרבות' ],
			'treatment': [], },
		{ 	'condition': 'מצוקה נשימתית כללית',
			'definition': '',
			'chapter': 'breath',
			'signs': [ 'תלונה על מצוקה נשימתית', 'ישיבה ורכינה קדימה', 'טכיפנאה', 'טכיקרדיה', 'כחלון פריפרי או מרכזי (לשון)',
					'שימוש בשרירי עזר', 'קולות נשימה חריגים' ],
			'treatment': [], },
		{ 	'condition': 'מצוקה נשימתית חריפה',
			'definition': '',
			'chapter': 'breath',
			'signs': [ 'חוסר יכולת להשלים משפט', 'שימוש בשרירי עזר', 'שינוי במצב בכרה: אי שקט/חרדה', 'שינוי במצב הכרה: ישנוניות', 
					'כחלון (ציאנוזיס)', 'הזעה' ],
			'treatment': [], },
		{ 	'condition': 'אסטמה',
			'definition': 'מחלה כרונית התקפית של דרכי הנשימה התחתונות - התכווצות והיצרות של הסמפונות',
			'chapter': 'breath',
			'signs': [ 'סימני מצוקה נשימתית', 'צפצופים בנשימה', 'שיעול', 'התארכות הנשימה', 'שימוש בשרירי עזר' ],
			'treatment': [ 'ABC', 'חמצן', 'הרגעת החולה', 'בזמן התקף - להזמין נטן' ], },
		{ 	'condition': 'נפחת/אמפיזמה',
			'definition': 'סוג של COPD. מחלה כרונית בה נאדיות הריאה מוגדלות וניזוקות, ירידה בכמות הנימים הריאתיים',
			'chapter': 'breath',
			'signs': [ 'סימני מצוקה נשימתית', 'גוון עור אדום (פוליצטמיה)', 'חולה רזה (מאמץ נשימתי ניכר)' ],
			'treatment': [ 'ABC', 'חמצן', 'הושבת החולה', 'הרגעת החולה', 'בזמן התקף - להזמין נטן',
					'טיפול מניעתי - הפסקת עישון והרחקה מזיהום אוויר' ], },
		{ 	'condition': 'דלקת סמפונות כרונית',
			'definition': 'סוג של COPD. דלקות והיצרות של הסמפונות המלוות בהפרשות ריר מוגברת, כתוצאה מהרס של השערות בדרכי האוויר',
			'chapter': 'breath',
			'signs': [ 'שיעול נמוך הנשמך למעלה משלושה חודשים, ללא סיבה, ובמשך משנתיים רצופות', 'סימני מצוקה נשימתית',
					'רמת חמצן נמוכה בדם, באופן כרוני כחלחלים', 'חזה חביתי', 'עודף משקל', 'עייפות', 'כאבי ראש והפרעות ראייה' ],
			'treatment': [ 'ABC', 'חמצן', 'הושבת החולה', 'הרגעת החולה', 'בזמן התקף - להזמין נטן' ] },
		{ 	'condition': 'דלקת ריאות',
			'definition': 'התמלאות הריאות בהפרשות ותאים דלקתיים כתוצאה מחלקיקים חיידקיים ונגיפיים',
			'chapter': 'breath',
			'signs': [ 'נראה חולה', 'היסטוריה של חום', 'כאב בחזה המתגבר בנשימה', 'צמרמורת', 'מצוקה נשימתית', 'חולשה', 'שיעול',
					'ליחה דלקתית/דמית', 'ייתכנו כאבי בטן' ],
			'treatment': [ 'ABC', 'חמצן', 'קירור בעת הצורך', 'פינוי לבית חולים' ], },
		{ 	'condition': 'תסחיף ריאתי',
			'definition': 'קריש דם או חלקיק אחר בכלי דם פולמונרי החוסם את זרימת הדם',
			'chapter': 'breath',
			'signs': [ 'קוצר נשימה פתאומי', 'כאב בחזה', 'שיעול (לעיתים דמי)', 'טכיקארדיה', 'טכיפניאה' ],
			'treatment': [ 'ABC', 'חמצן' ], },
		{ 	'condition': 'שבץ מוחי איסכמי',
			'definition': 'חסימה של כלי דם במוח',
			'chapter': 'nerves',
			'riskfactors': [ 'יצר לחץ דם', 'עישון + גלולות', 'מחלות קרדיאליות', 'סכרת' ],
			'signs': [ 'סיפור המקרה - יופיע בפתאומיות', 'חולשת צד או שיתוקים בהצלבה (פציאליס)', 'בלבול', 'ירידה ברמת הכרה',
						'ירידה בהפעלת כוח גס', 'קושי בבליעה ודיבור', 'איבוד שיווי משקל וירידה בקואורדינציה',
						'חולשה', 'נחירות והפרעה בנתיב אוויר', 'אבדן תחושה', 'דופק איטי', 'שינויים בדפוסי נשימה',
						'עליה בלחץ דם', 'בחילות והקאות', 'אי שליטה על סוגרים',
						'צורת הדיבור/חיוך', 'הרמת ותזוזת גפיים עליונות ותחתונות', 'הפעלת כוח גס' ],
			'treatment': [ 'לבדוק סוכר - לשלול היפוגליקמיה', 'החולה יכול לשמוע גם אם אינו מדבר', 'שמירה על ABC', 'מתן חמצן',
							'הגבהת הראש כדי לשפר החזר וורידי ולמנוע אספירציה',
							'פינוי דחוף (time is brain)', 'אם ניתן אז לפנות לבית חולים יעודי (קבלת טיפול טרומבוליטי)' ], },
		{ 	'condition': 'שבץ מוחי המורגי',
			'definition': 'פריצה של כלי דם במוח',
			'chapter': 'nerves',
			'riskfactors': [ 'יצר לחץ דם', 'עישון + גלולות', 'מחלות קרדיאליות', 'סכרת' ],
			'signs': [ 'אישונים לא שווים', 'סטיית מבט', 'כאבי ראש', 'חוסר הכרה', 'חסימה של נתיב אוויר', 'קליניקה סוערת' ],
			'treatment': [ 'לבדוק סוכר - לשלול היפוגליקמיה', 'החולה יכול לשמוע גם אם אינו מדבר', 'שמירה על ABC', 'מתן חמצן',
							'הגבהת הראש כדי לשפר החזר וורידי ולמנוע אספירציה',
							'פינוי דחוף (time is brain)', 'אם ניתן אז לפנות לבית חולים יעודי (קבלת טיפול טרומבוליטי)' ], },
		{ 	'condition': 'היפוגליקמיה',
			'definition': 'חוסר סוכר בדם',
			'chapter': 'nerves',
			'signs': [ 'מתפתח במהירות - תוך דקות עד שעות', 'מינון יתר של אינסולין', 'פעילות גופנית חריגה', 'אכילה לא מספקת',
						'ירידה ברמת ההכרה', 'כעס, בלבול, תוקפנות', 'דופק מהיר, הזעה, חיוורון', 'חולשה, אי שקט, רעד',
						'רעב', 'כאבי ראש', 'פרכוסים' ],
			'riskfactors': [ 'השמנה', 'תורשה' ],
			'treatment': [ 'ABC', 'חמצן', 'בדיקת רמת סוכר', 'מתן גלוקוגל', 'הזמנת נטן' ] },
		{ 	'condition': 'היפרגליקמיה',
			'definition': 'רמת סוכר גבוה בדם',
			'chapter': 'nerves',
			'signs': [ 'אי נטילת תרופות', 'אכילת יתר', 'מחלות חום או זיהום',
						'מצא, יובש בריריות', 'שתן מרובה', 'ריח חריף מהפה (אציטון)', 'עור חם ויבש', 'חולשה, בחילות והכאות',
						'דפוק מהיר', 'נשימות מהירות ועמוקות', 'אובדן הכרה איטי הדרגתי', 'מתפתח תוך שעות עד ימים' ],
			'treatment': [ 'ABC', 'חמצן', 'בדיקת רמת סוכר', 'הזמנת נטן' ] },
		{ 	'condition': 'פרכוסים',
			'definition': 'פעילות לא תקינה של המוח הגורמת לירידה ברמת הכרה והתכווצויות בשרירים',
			'chapter': 'nerves',
			'signs': [ 'אפילפסיה', 'היפוקסיה מוחית', 'חום גבוה', 'גידול במוח', 'זיהומים ודלקות במערכת העצבים המרכזית', 'שבץ מוחי', 'טראומה בראש',
						'היפוגליקמיה', 'הרעלה', 'אלכוהול וסמים', 'רעלת הריון', 'מכת חום או התייבשות', 'הפרעות אלקטרוליטריות', 'גמילה מסמים',
						'פגיעות בעלי חיים', 'פרכוס טוני קלוני', 'הפרשת קצף מהפה', 'אי שליטה על סוגרים', 'סימני נשיכה על הלשון',
						'סימני חבלה חיצוניים', 'סטיית מבט (אישונים)' ], 
			'treatment': [ 'בזמן התקף - הרחקת חפצים העלולים לפגוע בחולה', 'בזמן התקף - ריפוד מתחת לראש החולה',
						'בזמן התקף - שמירה על נתיב אוויר פתוח', 'בזמן התקף - מתן חמצן',
						'בזמן התקף - הזמנת נטן', 'לאחר התקף - ניקוי פיו של החולה מהפרשות - אין להכניס אצבעות לפה',
						'לאחר התקף - SABC והספקת חמצן', 'לאחר התקף - בדיקת רמת סוכר', 'לאחר התקף - פינוי לבית חולים',
						'אין לנסות לעצור פרכוסים בכוח' ] },
		{ 	'condition': 'פרכוסי חום בילדים',
			'definition': 'בדכך כלל בגילאי חצי שנה עד שלוש, חייבת להיות מחלת חום בזמן הפרכוס',
			'chapter': 'nerves',
			'signs': [ 'סימני פרכוסים', 'מחלת חום' ],
			'treatment': [ 'ABC', 'חמצן', 'הפשטת הילד וקירור הגוף בעזרת מגבת פושרת', 'לבדוק רמת סוכר', 'אין להכניס לאמבטיה',
							'לשקול הזמנת נטן', 'לחפש גורמים לפרכוס - חום, טראומה, הרעלה, הסטוריה רפואית', 'יש לחפש סימנים נוספים (פריחה, נקודות אדומות)' ] },
		{ 	'condition': 'אנאפילקטיס',
			'definition': 'תגובה של הגוף לפלישת חומר זר',
			'chapter': 'nerves',
			'signs': [ 'סומק', 'פריחה, גירוד', 'דופק מהיר', 'קולות נשימה חריגים: צפצופים, צרידות, סטרידור', 'נפיחות (פנים, שפתיים ולשון)',
						'מעורבות מערכת העיכול: הקאות, כאבי בטן, שלשולים', 'דמעת' ],
			'treatment': [ 'פינוי מהיר לכיוון נטן או בית חולים', 'שמירה על נתיב אוויר פתוח', 'מתן חמצן', 'לבדוק עם לחולה יש מזרק אפיפן בתוקף - חל איסור להזריק את התרופה',
							'פתיחת וריד + נוזלים' ] }
];
var hebTerms = [];
hebTerms.push( { 'term': 'אספיקציה', 'desc': 'כשל נשימתי', 'chapter': 'cpr' } );
hebTerms.push( { 'term': 'אספירציה', 'desc': 'כניסה של הפרשות או גוף זר לקנה הנשימה והריאות', 'chapter': 'cpr' } );
hebTerms.push( { 'term': 'היפראקסנטציה', 'desc': 'הטיית יתר של הראש (החייאת תינוקות)', 'chapter': 'cpr' } );
hebTerms.push( { 'term': 'השתנקות', 'desc': 'חנק מגוף זר', 'chapter': 'cpr' } );
hebTerms.push( { 'term': 'נשימה אגונלית', 'desc': 'נשימה סופית, לא יעילה', 'chapter': 'cpr' } );
hebTerms.push( { 'term': 'חום פתולוגי', 'desc': 'חום 38 ומעלה', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'היפוטרמיה', 'desc': 'חום 35 ומטה', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'אסיסטולה', 'desc': 'דום לב', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'סיסטולה', 'desc': 'התכווצות חדרי הלב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'דיאסטולה', 'desc': 'הרפיית חדרי הלב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'ברדיקארדיה', 'desc': 'דופק נמוך מ60 בדקה', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'טכיקארדיה', 'desc': 'דופק גבוה מ100 בדקה', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'אפנאה', 'desc': 'אין נשימה', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'בראדיפניאה', 'desc': 'נשימה איטית', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'טכיפניאה', 'desc': 'נשימה מהירה', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'דיספניאה', 'desc': 'תחושה סובייקטיבית של קוצר נשימה', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'לחץ דם', 'desc': 'התנגדות פריפרית X תקופת לב', 'chapter': 'patient' } );
hebTerms.push( { 'term': 'פלסמה', 'desc': 'נוזל הדם (כ55% מנפח הדם)', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'המטוקריט', 'desc': 'תאי הדם (כ45% מנפח הדם)', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'אריטרוציטים', 'desc': 'כדוריות הדם האדומות', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'הומוגלובין', 'desc': 'חלבון שחמצן נקשר אליו (בכדוריות הדם האדומות)', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'אנמיה', 'desc': 'ירידה בכמות הכדוריות האדומות או בריכוז ההומוגלובין בתוכן', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'לויקוציטים', 'desc': 'כדוריות הדם הלבנות', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'תרומבוציטים', 'desc': 'טסיות הדם', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'עורק', 'desc': 'כלי דם בעל שלוש שכבות הזורם מן הלב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'וריד', 'desc': 'כלי דם בעל שלוש שכבות הזורם אל הלב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'קפילרה', 'desc': 'כלי הדם הדק ביותר, בעל שכבה אחת', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'פריקרד', 'desc': 'קרום/כיס הלב (השכבה הרביעית)', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'אפיקרד', 'desc': 'השכבה החיצונית של הלב (שכבה שלישית)', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'מיוקרד', 'desc': 'שכבת השריר של הלב (השכבה השנייה)', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'אנדוקרד', 'desc': 'השכבה הפנימית של הלב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'סיסטולה', 'desc': 'כיווץ הלב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'דיאסטולה', 'desc': 'הרפיית הלב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'מסתם אאורטאלי', 'desc': 'מסתם בלב בין חדר שמאל לאבי העורקים', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'מסתם פולמונרי', 'desc': 'מסתם בלב בין חדר ימין לעורק הריאה', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'כלי דם קורונריים', 'desc': 'העורקים הקורונריים מספקים דם ללב', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'טרשת העורקים', 'desc': 'הצטברות של רובד טרשתי בתוך דופן כלי הדם הכלילי, והבסיס לכל המחלות הקרדיאליות', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'אוטם שקט', 'desc': 'לעיתים (בעיקר בחולי סכרת) יכול להופי אוטם שאינו מלווה בכאבים', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'אי ספיקת לב', 'desc': 'תפקוד לקוי של הלב הגורם לחוסר יכולת להזרים דם לגוף בכמות ובקצב הדרושים לתפקוד תקין', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'מוסקולוסקלטל', 'desc': 'שריר-שלד', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'גסטרואינטסטינל', 'desc': 'כיבה-מעי', 'chapter': 'cardio' } );
hebTerms.push( { 'term': 'הומואוסטזיס', 'desc': 'איזון רמת החומציות', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'הנאדיות', 'desc': 'היחידה התפקודית של הריאה', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'היפופנאה', 'desc': 'נשימה שטוחה, רדודה', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'אורטופנאה', 'desc': 'קושי בנשימה המופיע בשכיבה', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'היפוקסיה', 'desc': 'חוסר חמצן ברקמה', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'סטורציה', 'desc': 'מידת ריווי החמצן בדם', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'פרפוזיה', 'desc': 'זרימה/הגעה של דם אל רקות הגוף', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'אסטמה', 'desc': 'מחלה כרונית, התקפית של דרכי נשימה תחתונות', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'היסטמין', 'desc': 'תרכובת אורגנית המופרשת במערכת החיסון של הריאות. הפרשה מוגזמת גורמת לאסטמה', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'פוליצטמיה', 'desc': 'העלאה של כמות כדוריות הדם האדומות בדם (פיצוי על נפחת)', 'chapter': 'breath' } );
hebTerms.push( { 'term': 'שבץ מוחי איסכמי', 'desc': 'חסימה של כלי דם במוח', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'שבץ מוחי המורגי', 'desc': 'קרע בכלי דם במוח', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'סכרת', 'desc': 'הפרעה מטאבולית המתאפיינת ברמות גבוהות של סוכר', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'אינסולין', 'desc': 'הורמון המיוצר בלבלב ותפקידו לווסת את כמות הסוכר בדם', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'סכרת נעורים', 'desc': 'הפרשה נמוכה או העדר אינסולין', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'סכרת סוג 2', 'desc': 'תפקוד ירוד של הלבלב או התפתחות תנגודת לאינסולין בגוף, סכרת שאינה תלויה באינסולין בהתחלה', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'פרכוסים', 'desc': 'אירוע פיתאומי של פעילות חשמלית חריגה ובלתי נשלטת במוח', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'פרכוס פשוט', 'desc': 'פרכוס חלקי ללא שינויים בהתנהגות', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'פרכוס מורכב', 'desc': 'פרכוס חלקי עם שינויים בהתנהגות', 'chapter': 'nerves' } );
hebTerms.push( { 'term': 'אנאפילקסיס', 'desc': 'תרגובת יתר רגישותית כללית של הגוף לחדירת חומזר זן - אנטיגן (התגובה האלרגית החריפה ביותר)', 'chapter': 'nerves' } );

var engTerms = [];
engTerms.push( { 'term': 'Aorta', 'desc': 'אבי העורקים', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Atrium', 'desc': 'עליה בלב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Ventricle', 'desc': 'חדר בלב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Sino Artial Node', 'desc': 'הקוצב הראשי בלב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Atrio Ventricle Node', 'desc': 'הקוצב המשני בלב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Bundle of His', 'desc': 'סיב הולכה בלב (שלב 1 לאחר His)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Right / Left Bundle Branch', 'desc': 'סיב הולכה בלב (שלב 2 לאחר His)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Purkinje', 'desc': 'סיב הולכה בלב (שלב 3 לאחר His)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Mitral', 'desc': 'מסתם דו צניפי בלב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Tricuspid', 'desc': 'מסתם תלת צניפי בלב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Arteriosclerosis', 'desc': 'טרשת עורקים', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Angina Perctoris', 'desc': 'תעוקת חזה', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Myocardial Infarction', 'desc': 'אואם בשריר הלב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Acute Coronary Syndrome', 'desc': 'תסמונת כלילית חריפה', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Heart Failure', 'desc': 'אי ספיקת לב', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Pulmonary Edema', 'desc': 'בצקת ראות', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Pitting Edema', 'desc': 'בצקות הגפיים', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Aortic Stenosis', 'desc': 'בעיה מסתמית (גורם לאי ספיקת לב)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Cardiomyophaies', 'desc': 'מחלות שריר הלב (גורם לאי ספיקת לב)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Pulmonary Embolism', 'desc': 'תסחיף ריאתי (גורם לאי ספיקת לב)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Congestive Heart Failure', 'desc': 'בצקת ריאות (אי ספיקת לב שמאל)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Cardiogenic Shock', 'desc': 'המצב הקשה ביותר של אי ספיקת לב שמאל', 'chapter': 'cardio' } );
//hypoperiphuzia
engTerms.push( { 'term': 'Aortic Aneurysm', 'desc': 'מפרצת אאוטלית (התנפחות של האאורטה)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Aortic Dissection', 'desc': 'הפרדות שכבות כלי הדם אחת מהשניה (המדיה מהאדוונטיציה)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'Aortic Rapture', 'desc': 'קריעה של דופן האאורטה (אנוריזמה שהתפוצצה או טראומה)', 'chapter': 'cardio' } );
engTerms.push( { 'term': 'ATP', 'desc': 'אנדוזין טריפוספט, מטבע האנרגיה של הגוף, מופק מגלוקוז', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Sternum', 'desc': 'עצם החזה', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Pneumonia', 'desc': 'דלקת ריאות', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Chronic Obstructive Polmunary Disease', 'desc': 'מחלה חסימתית כרונית של דרכי הנשימה התחתונות', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Chronic Bronchitis', 'desc': 'דלקת סימפונות כרונית, סוג של COPD', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Emphysema', 'desc': 'נפחת, סוג של COPD', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Hypoxic Drive', 'desc': 'מעבר של הגוף לוויסות נשימה לפי חוסר בחמצן במקום עודף בCO2 (Chronic Bronchitis, COPD)', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Hyperventilation', 'desc': 'אוורור יתר', 'chapter': 'breath' } );
engTerms.push( { 'term': 'Transient Ischemic Attack', 'desc': 'אירוע איסכמי חולף', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Diabetes Mellitus', 'desc': 'סכרת', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Seizures', 'desc': 'פרכוסים', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Partial / Focal Seizure', 'desc': 'פרכוס חלקי / ממוקד', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Absence - Petit Mal', 'desc': 'פרכוס כללי: ירידה במצב הכרה לזמן קצר וללא איבוד טונוס שרירים / התכווצויות', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Tonic Clonic - Grand Mal', 'desc': 'פרכוס כללי: אובדן הכרה והתכווצויות', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Status Epilepticus', 'desc': 'פרכוס Grand Mal הנמשך כ30 דקות או מספר פרכוסי Grand Mal ללא חזרה להכרה בניהם (מצב מסכן חיים)', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Epilepsy', 'desc': 'מחלה התקפית הנגרמת עקב פעילות יתר או לא תקינה של מוקד/ים ניורוניים במוח', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Febrile Siezures', 'desc': 'פרכוסי חום בילדים', 'chapter': 'nerves' } );
engTerms.push( { 'term': 'Hypertension', 'desc': 'יתר לחץ דם', 'chapter': 'patient' } );

var terms = [];
terms.push( { 'abrv': 'CVA', 'desc': 'Cerebrovascular Accident', 'heb': 'שבץ מוחי', 'chapter': 'cpr' } );
terms.push( { 'abrv': 'RBC', 'desc': 'Red Blood Cells', 'heb': 'תאי דם אדומים', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'WBC', 'desc': 'White Blood Cells', 'heb': 'תאי דם לבנים', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'VF', 'desc': 'Ventricular Fibrillation', 'heb': 'פרפור חדרים', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'PEA', 'desc': 'Pulesless Electrical Activity', 'heb': 'פעילות חשמליות שאינה מלווה בדופק', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'CPR', 'desc': 'Cardio Pulmonary Resuscitation', 'heb': 'החייאת לב ריאה', 'chapter': 'cpr' } );
terms.push( { 'abrv': 'NSR', 'desc': 'Normal Sinus Rythem', 'heb': 'קצב סינוס תקין בלב', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'ACS', 'desc': 'Accute coronary Syndrome', 'heb': 'תסמונת כלילית חריפה', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'CHF', 'desc': 'Congestive Heart Failure', 'heb': 'בצקת ריאות (אי ספיקת לב שמאל)', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'IHF', 'desc': 'Ischemic Heart Failure', 'heb': '', 'chapter': 'cardio' } );
terms.push( { 'abrv': 'COPD', 'desc': 'Chronic Obstructive Polmunary Disease', 'heb': 'מחלה חסימתית כרונית של דרכי הנשימה התחתונות (ישנם שני סוגים)',
				'chapter': 'breath' } );

var questionsPool = []
for (var i in conditions) {
	conditions[ i ].type = 'condition';
	questionsPool.push( conditions[ i ] );
	questionsPool.push( { 'type': 'whatdoeshehave', 'chapter': conditions[ i ].chapter, 'signs': conditions[ i ].signs, 'condition': conditions[ i ].condition, 'treatment': conditions[ i ].treatment } );
}
for (var i in hebTerms) {
	hebTerms[ i ].type = 'hebTerm';
	questionsPool.push( hebTerms[ i ] );
}
for (var i in engTerms) {
	engTerms[ i ].type = 'engTerm';
	questionsPool.push( engTerms[ i ] );
}
for (var i in terms) {
	terms[ i ].type = 'abrv';
	questionsPool.push( terms[ i ] );
}
for (var i in questions) {
	var question = questions[ i ];
	if ( question.type == "whichiswhich" ) {
		for (var j in question.questions) {
			var subQuestion = question.questions[ j ];
			questionsPool.push( { 'type': 'simpleQuestion', 'chapter': question.chapter, 'question': subQuestion.question, 'answer': subQuestion.answer } );
		}
	} else
		questionsPool.push( question );
}
