const fs = require('fs');
const path = require('path');

const pathEn = path.join(__dirname, 'src/locales/en.json');
const pathSi = path.join(__dirname, 'src/locales/si.json');

const en = JSON.parse(fs.readFileSync(pathEn, 'utf8'));
const si = JSON.parse(fs.readFileSync(pathSi, 'utf8'));

en.resources.faq_content = {
    univ_path: "🎓 University Path FAQs",
    voc_path: "🛠 Vocational Training FAQs",
    career_path: "💼 Career FAQs",
    
    q1: "What is the Z-score and how does it affect university selection?",
    q1_a1: "The Z-score is a standardized score used in Sri Lanka to rank students for admission to state universities. It is calculated based on a student’s performance in the G.C.E. Advanced Level (A/L) examination compared to other students in the same stream.",
    q1_a2: "The University Grants Commission uses the Z-score to determine eligibility and course selection. Each degree program has a minimum Z-score requirement, which varies every year depending on competition and district quota allocation.",
    q1_a3: "A higher Z-score increases the chances of being selected for competitive degree programs.",

    q2: "Can I enter university if I repeat A/Ls?",
    q2_a1: "Yes. Students are allowed to repeat the A/L examination to improve their results and Z-score. The best attempt (according to current regulations) will be considered for university admission.",
    q2_a2: "However, students should verify updated admission policies through the University Grants Commission before making a decision.",
    q2_a3: "Repeating A/Ls can improve opportunities, but students should also consider alternative pathways while preparing.",

    q3: "What are alternative options if I don’t get selected for a state university?",
    q3_a1: "If you are not selected for a state university, there are several alternative pathways:",
    q3_a2: "Higher National Diploma programs at Sri Lanka Institute of Advanced Technological Education",
    q3_a3: "Distance learning through Open University of Sri Lanka",
    q3_a4: "Accredited vocational qualifications under Tertiary and Vocational Education Commission",
    q3_a5: "Private higher education institutions",
    q3_a6: "Professional courses (IT, Accounting, Engineering, etc.)",
    q3_a7: "Not getting selected for a state university does not mean the end of higher education opportunities.",

    q4: "Are vocational qualifications recognized internationally?",
    q4_a1: "Many vocational qualifications in Sri Lanka are structured under the National Vocational Qualification (NVQ) framework, regulated by the Tertiary and Vocational Education Commission.",
    q4_a2: "Certain NVQ qualifications are recognized locally and can support international employment, especially in technical and skilled sectors. However, international recognition may depend on the country and industry.",
    q4_a3: "Students are advised to check the specific recognition status of their chosen qualification before enrolling.",

    q5: "What is NVQ and how does it work?",
    q5_a1: "NVQ (National Vocational Qualification) is a structured qualification framework in Sri Lanka that certifies practical and technical skills.",
    q5_a2: "It is regulated by the Tertiary and Vocational Education Commission and delivered through institutions such as the Vocational Training Authority and the National Apprentice and Industrial Training Authority.",
    q5_a3: "NVQ levels range from Level 1 (basic skills) to Level 7 (degree-equivalent qualifications). Students are assessed based on competency and practical ability rather than only written examinations.",

    q6: "Can I go to university after completing a vocational qualification?",
    q6_a1: "Yes. Certain higher-level NVQ qualifications (such as NVQ Level 5 or 6) may provide pathways to degree programs in selected fields.",
    q6_a2: "Some institutions allow credit transfers or lateral entry into degree programs. However, eligibility depends on the institution and course requirements.",
    q6_a3: "Students should confirm progression opportunities with the relevant university or institution before enrolling in a vocational program.",

    q7: "How do I choose between university and vocational training?",
    q7_a1: "Choosing between university and vocational training depends on:",
    q7_a2: "Your career goals",
    q7_a3: "Your learning style",
    q7_a4: "Financial situation",
    q7_a5: "Interest in theoretical vs practical learning",
    q7_a6: "University education focuses more on academic and theoretical knowledge, while vocational training emphasizes hands-on skills and direct industry readiness.",
    q7_a7: "Students are encouraged to research both pathways carefully and consider long-term career goals before deciding.",

    q8: "What are high-demand careers in Sri Lanka?",
    q8_a1: "High-demand career fields in Sri Lanka currently include:",
    q8_a2: "Information Technology and Software Development",
    q8_a3: "Engineering and Construction",
    q8_a4: "Healthcare and Nursing",
    q8_a5: "Tourism and Hospitality",
    q8_a6: "Skilled Technical Trades (Electricians, Automotive Technicians, etc.)",
    q8_a7: "Market demand can change over time, so students should stay updated through official sources such as the Ministry of Labor.",

    q9: "Are there government scholarships available?",
    q9_a1: "Yes. Government scholarships and financial assistance programs are available for eligible students.",
    q9_a2: "Scholarships may be offered through:",
    q9_a3: "State universities",
    q9_a4: "Government ministries",
    q9_a5: "Provincial councils",
    q9_a6: "Foreign-funded programs",
    q9_a7: "Students should regularly check announcements from the Ministry of Education and the University Grants Commission for updated information.",

    q10: "Can I study part-time while working?",
    q10_a1: "Yes. Several institutions in Sri Lanka offer part-time, evening, weekend, and distance learning programs.",
    q10_a2: "For example, the Open University of Sri Lanka provides flexible learning options for working individuals.",
    q10_a3: "Balancing work and study requires strong time management, but it is a practical option for many students who need financial independence."
};

si.resources.faq_content = {
    univ_path: "🎓 විශ්වවිද්‍යාල මාර්ග නිතර අසන ප්‍රශ්න",
    voc_path: "🛠 වෘත්තීය පුහුණු නිතර අසන ප්‍රශ්න",
    career_path: "💼 වෘත්තීය නිතර අසන ප්‍රශ්න",
    
    q1: "Z-score යනු කුමක්ද සහ එය විශ්වවිද්‍යාල තේරීමට බලපාන්නේ කෙසේද?",
    q1_a1: "Z-score යනු රාජ්‍ය විශ්වවිද්‍යාලවලට ප්‍රවේශය සඳහා සිසුන් ශ්‍රේණිගත කිරීමට ශ්‍රී ලංකාවේ භාවිතා කරන ප්‍රමිතිගත ලකුණු ක්‍රමයකි. එය ගණනය කරනු ලබන්නේ G.C.E. උසස් පෙළ (A/L) විභාගයේ එම අංශයේම අනෙකුත් සිසුන්ට සාපේක්ෂව ශිෂ්‍යයාගේ කාර්ය සාධනය මත පදනම්වය.",
    q1_a2: "විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභාව (UGC) සුදුසුකම් සහ පාඨමාලා තෝරාගැනීම තීරණය කිරීමට Z-score භාවිතා කරයි. සෑම උපාධි වැඩසටහනකටම අවම Z-score අවශ්‍යතාවයක් ඇති අතර එය තරඟකාරිත්වය සහ දිස්ත්‍රික් කෝටා වෙන් කිරීම අනුව සෑම වසරකම වෙනස් වේ.",
    q1_a3: "ඉහළ Z-score අගයක් මඟින් තරඟකාරී උපාධි වැඩසටහන් සඳහා තෝරා ගැනීමේ අවස්ථාව වැඩි කරයි.",

    q2: "මා උසස් පෙළ දෙවන වර කළහොත් විශ්වවිද්‍යාලයට ඇතුළත් විය හැකිද?",
    q2_a1: "ඔව්. සිසුන්ට ඔවුන්ගේ ප්‍රතිඵල සහ Z-score වැඩි දියුණු කිරීම සඳහා උසස් පෙළ විභාගය නැවත කිරීමට අවසර ඇත. හොඳම උත්සාහය විශ්වවිද්‍යාල ප්‍රවේශය සඳහා සලකා බලනු ලැබේ.",
    q2_a2: "කෙසේ වෙතත්, තීරණයක් ගැනීමට පෙර සිසුන් විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභාව හරහා යාවත්කාලීන කරන ලද ප්‍රවේශ ප්‍රතිපත්ති සත්‍යාපනය කළ යුතුය.",
    q2_a3: "A/L නැවත කිරීමෙන් අවස්ථා වැඩි දියුණු කළ හැකි නමුත්, සූදානම් වන අතරතුර සිසුන් විකල්ප මාර්ග ගැනද සලකා බැලිය යුතුය.",

    q3: "රාජ්‍ය විශ්වවිද්‍යාලයකට තේරී පත් නොවුවහොත් ඇති විකල්ප මොනවාද?",
    q3_a1: "ඔබ රාජ්‍ය විශ්වවිද්‍යාලයකට තේරී පත් නොවන්නේ නම්, විකල්ප කිහිපයක් තිබේ:",
    q3_a2: "ශ්‍රී ලංකා උසස් තාක්ෂණික අධ්‍යාපන ආයතනයේ (SLIATE) උසස් ජාතික ඩිප්ලෝමා (HND) වැඩසටහන්",
    q3_a3: "ශ්‍රී ලංකා විවෘත විශ්වවිද්‍යාලය (OUSL) හරහා දුරස්ථ අධ්‍යාපනය",
    q3_a4: "තෘතීයික සහ වෘත්තීය අධ්‍යාපන කොමිෂන් සභාව (TVEC) යටතේ පිළිගත් වෘත්තීය සුදුසුකම්",
    q3_a5: "private උසස් අධ්‍යාපන ආයතන",
    q3_a6: "වෘත්තීය පාඨමාලා (IT, Accounting, Engineering, ආදිය)",
    q3_a7: "රාජ්‍ය විශ්වවිද්‍යාලයකට තේරී පත් නොවීම උසස් අධ්‍යාපන අවස්ථාවන්හි අවසානය අදහස් නොකරයි.",

    q4: "වෘත්තීය සුදුසුකම් ජාත්‍යන්තරව පිළිගැනෙනවාද?",
    q4_a1: "ශ්‍රී ලංකාවේ බොහෝ වෘත්තීය සුදුසුකම් තෘතීයික සහ වෘත්තීය අධ්‍යාපන කොමිෂන් සභාව විසින් නියාමනය කරනු ලබන ජාතික වෘත්තීය සුදුසුකම් (NVQ) රාමුව යටතේ ව්‍යුහගත කර ඇත.",
    q4_a2: "ඇතැම් NVQ සුදුසුකම් உள்நாட்டில் පිළිගැනෙන අතර, විශේෂයෙන් තාක්ෂණික සහ කුසලතා අංශවල ජාත්‍යන්තර රැකියා සඳහා සහාය විය හැක. කෙසේ වෙතත් ජාත්‍යන්තර පිළිගැනීම රට සහ කර්මාන්තය මත රඳා පවතී.",
    q4_a3: "ලියාපදිංචි වීමට පෙර තමන් තෝරාගත් සුදුසුකම්වල නිශ්චිත පිළිගැනීමේ තත්ත්වය පරීක්ෂා කරන ලෙස සිසුන්ට උපදෙස් දෙනු ලැබේ.",

    q5: "NVQ යනු කුමක්ද සහ එය ක්‍රියාත්මක වන්නේ කෙසේද?",
    q5_a1: "NVQ (National Vocational Qualification) යනු ප්‍රායෝගික සහ තාක්ෂණික කුසලතා සහතික කරන ශ්‍රී ලංකාවේ ව්‍යුහගත සුදුසුකම් රාමුවකි.",
    q5_a2: "එය තෘතීයික සහ වෘත්තීය අධ්‍යාපන කොමිෂන් සභාව මගින් නියාමනය කරනු ලබන අතර වෘත්තීය පුහුණු අධිකාරිය (VTA) සහ ජාතික ආධුනිකත්ව සහ කාර්මික පුහුණු අධිකාරිය (NAITA) වැනි ආයතන හරහා ලබා දෙනු ලැබේ.",
    q5_a3: "NVQ මට්ටම් Level 1 (මූලික කුසලතා) සිට Level 7 (උපාධි-සමාන සුදුසුකම්) දක්වා පරාසයක පවතී. ග්‍රන්ථමය විභාග පමණක් නොව නිපුණතාවය සහ ප්‍රායෝගික හැකියාව මත සිසුන් ඇගයීමට ලක් කෙරේ.",

    q6: "වෘත්තීය සුදුසුකමක් ලබා ගැනීමෙන් පසු විශ්වවිද්‍යාලයට යා හැකිද?",
    q6_a1: "ඔව්. ඇතැම් ඉහළ මට්ටමේ NVQ සුදුසුකම් (උදාහරණයක් ලෙස NVQ Level 5 හෝ 6) තෝරාගත් ක්ෂේත්‍ර සඳහා උපාධි වැඩසටහන් වෙත මාර්ග සැපයිය හැකිය.",
    q6_a2: "සමහර ආයතන උපාධි වැඩසටහන් සඳහා credit transfer හෝ lateral entry වලට ඉඩ දෙයි. එහි සුදුසුකම් ආයතනය සහ පාඨමාලා අවශ්‍යතා මත රඳා පවතී.",
    q6_a3: "වෘත්තීය වැඩසටහනකට ලියාපදිංචි වීමට පෙර සිසුන් අදාළ විශ්වවිද්‍යාලය හෝ ආයතනය සමඟ ප්‍රගති අවස්ථා තහවුරු කළ යුතුය.",

    q7: "විශ්වවිද්‍යාල සහ වෘත්තීය පුහුණුව අතර තෝරා ගන්නේ කෙසේද?",
    q7_a1: "විශ්ව විද්‍යාල සහ වෘත්තීය පුහුණුව තෝරාගැනීම පහත සඳහන් කරුණු මත රඳා පවතී:",
    q7_a2: "ඔබේ වෘත්තීය අරමුණු",
    q7_a3: "ඔබේ ඉගෙනීමේ විලාසය",
    q7_a4: "මූල්‍ය තත්වය",
    q7_a5: "න්‍යායික එදිරිව ප්‍රායෝගික ඉගෙනීම කෙරෙහි ඇති උනන්දුව",
    q7_a6: "විශ්වවිද්‍යාල අධ්‍යාපනය න්‍යායික දැනුම කෙරෙහි වැඩි අවධානයක් යොමු කරන අතර, වෘත්තීය පුහුණුව ප්‍රායෝගික කුසලතා සහ සෘජු කර්මාන්ත සූදානම අවධාරණය කරයි.",
    q7_a7: "තීරණය කිරීමට පෙර මාර්ග දෙකම හොඳින් අධ්‍යයනය කර දීර්ඝ කාලීන වෘත්තීය අරමුණු සලකා බැලීමට සිසුන් දිරිමත් කරනු ලැබේ.",

    q8: "ශ්‍රී ලංකාවේ ඉහළ ඉල්ලුමක් ඇති වෘත්තීන් මොනවාද?",
    q8_a1: "ශ්‍රී ලංකාවේ දැනට ඉහළ ඉල්ලුමක් ඇති වෘත්තීය ක්ෂේත්‍ර සඳහා පහත ඒවා ඇතුළත් වේ:",
    q8_a2: "Information Technology (තොරතුරු තාක්ෂණ) සහ මෘදුකාංග සංවර්ධන",
    q8_a3: "ඉංජිනේරු සහ ඉදිකිරීම්",
    q8_a4: "සෞඛ්‍ය සේවා සහ හෙද සේවා",
    q8_a5: "සංචාරක සහ සත්කාරක කළමනාකරණය",
    q8_a6: "කුසලතා සහිත තාක්ෂණික වෙළඳාම් (විදුලි කාර්මිකයන්, මෝටර් රථ කාර්මික ශිල්පීන්, ආදිය)",
    q8_a7: "වෙළෙඳපොළ ඉල්ලුම කාලයත් සමඟ වෙනස් විය හැකි බැවින් කම්කරු අමාත්‍යාංශය වැනි නිල මූලාශ්‍ර හරහා සිසුන් යාවත්කාලීනව සිටිය යුතුය.",

    q9: "රජයේ ශිෂ්‍යත්ව ලබා ගත හැකිද?",
    q9_a1: "ඔව්. සුදුසුකම් ලත් සිසුන් සඳහා රජයේ ශිෂ්‍යත්ව සහ මූල්‍ය ආධාර වැඩසටහන් තිබේ.",
    q9_a2: "ශිෂ්‍යත්ව ලබා දිය හැක්කේ:",
    q9_a3: "රාජ්‍ය විශ්වවිද්‍යාල හරහා",
    q9_a4: "රජයේ අමාත්‍යාංශ හරහා",
    q9_a5: "පළාත් සභා හරහා",
    q9_a6: "විදේශ අරමුදල් සහිත වැඩසටහන් නිසාවෙන්",
    q9_a7: "යාවත්කාලීන තොරතුරු සඳහා අධ්‍යාපන අමාත්‍යාංශයෙන් සහ විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභාවෙන් නිවේදන නිතර පරීක්ෂා කළ යුතුය.",

    q10: "මට රැකියාවක් කරන අතරතුර අර්ධකාලීනව අධ්‍යාපනය හැදෑරිය හැකිද?",
    q10_a1: "ඔව්. ශ්‍රී ලංකාවේ ආයතන රැසක් අර්ධකාලීන, සන්ධ්‍යා, සති අන්ත සහ දුරස්ථ ඉගෙනුම් වැඩසටහන් ඉදිරිපත් කරයි.",
    q10_a2: "උදාහරණයක් ලෙස, ශ්‍රී ලංකා විවෘත විශ්වවිද්‍යාලය (OUSL) වැඩ කරන පුද්ගලයින් සඳහා නම්‍යශීලී ඉගෙනුම් විකල්ප සපයයි.",
    q10_a3: "වැඩ සහ අධ්‍යයනය සමතුලිත කිරීම සඳහා ශක්තිමත් කාල කළමනාකරණයක් අවශ්‍ය වේ, නමුත් මූල්‍ය ස්වාධීනත්වය අවශ්‍ය බොහෝ සිසුන් සඳහා එය ප්‍රායෝගික විකල්පයකි."
};


en.resources.timeline_data = {
    step1: {
        title: "Month 1: Understand Results & Explore Options",
        lines: [
            "Check A/L results and Z-score",
            "Compare previous years’ cut-off marks",
            "Visit the University Grants Commission website",
            "List eligible degree programs",
            "Explore alternative pathways (HND, vocational, private)",
            "Discuss options with parents or teachers"
        ]
    },
    step2: {
        title: "Month 2: Research & Compare Pathways",
        lines: [
             "Compare university vs vocational training",
             "Research private institutions and accreditation",
             "Understand NVQ levels and progression paths",
             "Check apprenticeship opportunities",
             "Look for government or foreign scholarships"
        ]
    },
    step3: {
        title: "Month 3: Prepare & Submit Applications",
        lines: [
            "Prepare documents (A/L result sheet, NIC, birth certificate)",
            "Register and apply through official university portals",
            "Apply for vocational, private, or distance learning programs",
            "Submit scholarship applications before deadlines"
        ]
    },
    step4: {
        title: "Month 4–5: Skill Development Phase",
        lines: [
            "Improve English communication skills",
            "Develop basic IT and computer skills",
            "Follow short certificate or online courses",
            "Volunteer or complete internships if possible",
            "Build confidence and workplace readiness"
        ]
    },
    step5: {
        title: "Month 6+: Decision & Transition Phase",
        lines: [
            "Confirm and accept selected admissions",
            "Plan accommodation, transport, and finances",
            "Prepare mentally for university or training life",
            "Set personal and career goals for the next year"
        ]
    },
    step6: {
        title: "Common Mistakes to Avoid",
        lines: [
            "Waiting without researching options",
            "Choosing a path only based on friends’ decisions",
            "Ignoring vocational and technical pathways",
            "Not checking course recognition",
            "Missing application deadlines"
        ]
    }
}

si.resources.timeline_data = {
    step1: {
        title: "පළමු මාසය: ප්‍රතිඵල අවබෝධ කර ගැනීම සහ විකල්ප ගවේෂණය කිරීම",
        lines: [
            "A/L ප්‍රතිඵල සහ Z-score පරීක්ෂා කිරීම",
            "පෙර වසරවල කඩඉම් ලකුණු සංසන්දනය කිරීම",
            "විශ්වවිද්‍යාල ප්‍රතිපාදන කොමිෂන් සභාවේ (UGC) වෙබ් අඩවියට පිවිසීම",
            "සුදුසුකම් ලත් උපාධි වැඩසටහන් ලැයිස්තුගත කිරීම",
            "විකල්ප මාර්ග ගවේෂණය කිරීම (HND, වෘත්තීය, private)",
            "දෙමාපියන් හෝ ගුරුවරුන් සමඟ විකල්ප සාකච්ඡා කිරීම"
        ]
    },
    step2: {
        title: "දෙවන මාසය: මාර්ග පිළිබඳ පර්යේෂණ සහ සංසන්දනය කිරීම",
        lines: [
             "විශ්වවිද්‍යාල හා වෘත්තීය පුහුණුව අතර සංසන්දනය කිරීම",
             "පෞද්ගලික ආයතන සහ ඔවුන්ගේ පිළිගැනීම පිළිබඳ පර්යේෂණ කිරීම",
             "NVQ මට්ටම් සහ ප්‍රගති මාර්ග අවබෝධ කර ගැනීම",
             "ආධුනිකත්ව අවස්ථා පරීක්ෂා කිරීම",
             "රජයේ හෝ විදේශීය ශිෂ්‍යත්ව සෙවීම"
        ]
    },
    step3: {
        title: "3 වන මාසය: අයදුම්පත් සකස් කිරීම සහ ඉදිරිපත් කිරීම",
        lines: [
            "ලේඛන සකස් කිරීම (A/L ප්‍රතිඵල පත්‍රය, ජාතික හැඳුනුම්පත, උප්පැන්න සහතිකය)",
            "නිල විශ්වවිද්‍යාල ද්වාර හරහා ලියාපදිංචි වී අයදුම් කිරීම",
            "වෘත්තීය, පෞද්ගලික, හෝ දුරස්ථ ඉගෙනුම් වැඩසටහන් සඳහා අයදුම් කිරීම",
            "නියමිත කාලසීමාවට පෙර ශිෂ්‍යත්ව අයදුම්පත් ඉදිරිපත් කිරීම"
        ]
    },
    step4: {
        title: "කිවෙනි මාසය 4-5: කුසලතා වර්ධනය කිරීමේ අදියර",
        lines: [
            "ඉංග්‍රීසි සන්නිවේදන කුසලතා වැඩි දියුණු කිරීම",
            "මූලික තොරතුරු තාක්ෂණ හා පරිගණක කුසලතා වර්ධනය කිරීම",
            "කෙටි සහතික හෝ මාර්ගගත පාඨමාලා හැදෑරීම",
            "හැකි නම් ස්වේච්ඡාවෙන් ඉදිරිපත් වීම හෝ සීමාවාසික පුහුණුව සම්පූර්ණ කිරීම",
            "විශ්වාසය සහ රැකියා ස්ථානය සඳහා සූදානම ගොඩනැගීම"
        ]
    },
    step5: {
        title: "6+ මාසය: තීරණ සහ සංක්‍රාන්ති අදියර",
        lines: [
            "තෝරාගත් ඇතුළත් කිරීම් තහවුරු කර පිළිගැනීම",
            "නවාතැන්, ගමනාගමනය සහ ආර්ථිකය සැලසුම් කිරීම",
            "විශ්වවිද්‍යාල හෝ පුහුණු ජීවිතය සඳහා මානසිකව සූදානම් වීම",
            "ලබන වසර සඳහා පුද්ගලික සහ වෘත්තීය ඉලක්ක තැබීම"
        ]
    },
    step6: {
        title: "වළක්වා ගත යුතු පොදු වැරදි",
        lines: [
            "විකල්ප පර්යේෂණ නොකර බලා සිටීම",
            "මිතුරන්ගේ තීරණ මත පමණක් පදනම්ව මාර්ගයක් තෝරා ගැනීම",
            "වෘත්තීය සහ තෘතීයික මාර්ග නොසලකා හැරීම",
            "පාඨමාලා පිළිගැනීම පරීක්ෂා නොකිරීම",
            "අයදුම් කිරීමේ අවසාන දිනයන් මඟ හැරීම"
        ]
    }
}


fs.writeFileSync(pathEn, JSON.stringify(en, null, 2));
fs.writeFileSync(pathSi, JSON.stringify(si, null, 2));
console.log("Timeline and FAQ added.");
