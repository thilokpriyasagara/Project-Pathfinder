const fs = require('fs');
const path = require('path');

const pathEn = path.join(__dirname, 'src/locales/en.json');
const pathSi = path.join(__dirname, 'src/locales/si.json');

const en = JSON.parse(fs.readFileSync(pathEn, 'utf8'));
const si = JSON.parse(fs.readFileSync(pathSi, 'utf8'));

// HOME
const homeLabels = {
    why_it_matters: 'Why It Matters',
    explore_fields: 'Explore Fields',
    resources: 'Resources',
    success_stories: 'Success Stories',
};
const homeLabelsSi = {
    why_it_matters: 'එය වැදගත් වන්නේ ඇයි',
    explore_fields: 'ක්ෂේත්‍ර ගවේෂණය කරන්න',
    resources: 'සම්පත්',
    success_stories: 'සාර්ථකත්වයේ කථා',
};

en.home.labels = homeLabels;
si.home.labels = homeLabelsSi;

en.home.insights_cta = { read_more: 'Read More' };
si.home.insights_cta = { read_more: 'තවදුරටත් කියවන්න' };

en.home.success = {
    section_sub: 'Real stories from alumni who turned vocational training into global careers.',
    stories: {
        imesh: {
            badge: 'Culinary Entrepreneur',
            subtitle: 'From Dubai Kitchens to Sri Lankan Entrepreneur',
            quote: 'My journey started with a simple passion for cooking, which eventually led me to the fast-paced, high-pressure commercial kitchens of Dubai. For 12 years, I worked in top-tier restaurants, mastering the culinary arts. Today, I\'ve brought all that international experience back home to Sri Lanka to build my own restaurant.',
            takeaway: 'A vocational skill like the culinary arts, paired with discipline and hard work, can take you around the world.'
        },
        nuri: {
            badge: 'Welding Specialist & Mentor',
            subtitle: 'From NAITA Sparks to Global Engineering Projects',
            quote: 'My journey began with the sparks of a welding torch at NAITA. That solid technical foundation gave me the confidence to move from a local workshop to specializing in advanced, high-demand fields like underwater welding and robotic systems on massive global projects. Today, I\'m proud to mentor future engineers.',
            takeaway: 'Focus on mastering your skills - they can take you to depths and heights you never imagined.'
        },
        chameera: {
            badge: 'Heavy Vehicle Mechanic',
            subtitle: 'From CGTTI to Europe: Mastering Heavy Vehicle Mechanics',
            quote: 'My career began at CGTTI, and today I work as a Heavy Vehicle Mechanic in Romania, Europe. Working on advanced trucks like MAN and Scania requires strict diagnostics and precision. The world-class, hands-on training I received at CGTTI built the technical foundation and discipline I needed to thrive in this highly systematic European environment.',
            takeaway: 'Master your practical skills, and the global industry will always have a place for you.'
        }
    },
    cta: {
        title: 'Your Success Story Starts Here',
        subtitle: 'These alumni turned their vocational training into global careers. Your path awaits - take the first step today.',
        btn: 'Start Your Journey'
    }
};

si.home.success = {
    section_sub: 'වෘත්තීය පුහුණුව ගෝලීය වෘත්තීන් බවට පත් කළ ආදි ශිෂ්‍යයින්ගේ සැබෑ කථා.',
    stories: {
        imesh: {
            badge: 'සූපශාස්ත්‍ර ව්‍යවසායක',
            subtitle: 'ඩුබායි මුළුතැන්ගෙවල්වල සිට ශ්‍රී ලාංකික ව්‍යවසායකයෙකු දක්වා',
            quote: 'මගේ ගමන ආරම්භ වූයේ ඉවුම් පිහුම් සඳහා වූ සරල ආශාවකින් වන අතර එය අවසානයේදී ඩුබායි හි වාණිජ මුළුතැන්ගෙවල් වෙත මා යොමු කළේය. වසර 12ක් පුරාවටම ඉහළ පෙළේ ආපනශාලාවල සේවය කළ මම අද ඒ ජාත්‍යන්තර අත්දැකීම් මාතෘභූමියට ගෙනවිත් මගේම ආපනශාලාවක් ගොඩනගා ඇත්තෙමි.',
            takeaway: 'සූපශාස්ත්‍ර කලාව වැනි කුසලතාවක් සමඟ හික්මීම සහ වෙහෙස මහන්සි වී වැඩ කිරීම, ඔබව ලොව වටා ගෙන යා හැකිය.'
        },
        nuri: {
            badge: 'වෑද්දුම් විශේෂඥ සහ උපදේශක',
            subtitle: 'NAITA විදුලි පුපුරු වල සිට ගෝලීය ඉංජිනේරු ව්‍යාපෘති දක්වා',
            quote: 'මගේ ගමන ආරම්භ වූයේ NAITA ආයතනයේ වෑද්දුම් යන්ත්‍රයකිනි. එම තාක්ෂණික පදනම ලබා දුන් විශ්වාසයෙන් මම දේශීය ක්‍රියාකරුවෙකුගේ සිට දිය යට වෑද්දුම් සහ රොබෝ පද්ධති දක්වා ගියෙමි. අද අනාගත ඉංජිනේරුවන්ට මග පෙන්වීමට ලැබීම ගැන මම ආඩම්බර වෙමි.',
            takeaway: 'ඔබේ කුසලතා ප්‍රගුණ කිරීම කෙරෙහි අවධානය යොමු කරන්න.'
        },
        chameera: {
            badge: 'බර වාහන කාර්මික',
            subtitle: 'CGTTI සිට යුරෝපය දක්වා: බර වාහන යාන්ත්‍රික විද්‍යාව ප්‍රගුණ කිරීම',
            quote: 'මගේ වෘත්තිය CGTTI හි ආරම්භ වූ අතර, අද මම යුරෝපයේ රුමේනියාවේ බර වාහන කාර්මික ශිල්පියෙකු ලෙස සේවය කරමි. CGTTI වෙතින් ලද ලෝක මට්ටමේ පුහුණුව මට ලෝකයටම විවෘත වීමට දොරටු විවර කළේය.',
            takeaway: 'ඔබේ ප්‍රායෝගික කුසලතා ප්‍රගුණ කරන්න, එවිට ගෝලීය කර්මාන්තයේ සෑම විටම ඔබට ස්ථානයක් ලැබෙනු ඇත.'
        }
    },
    cta: {
        title: 'ඔබගේ සාර්ථකත්වයේ කතාව මෙතැනින් ආරම්භ වේ',
        subtitle: 'මෙම ආදි ශිෂ්‍යයින් ඔවුන්ගේ වෘත්තීය පුහුණුව ගෝලීය වෘත්තීන් බවට පත් කළහ. ඔබේ මාර්ගය ඔබ එනතුරු බලා සිටී - අදම පළමු පියවර තබන්න.',
        btn: 'ඔබේ ගමන ආරම්භ කරන්න'
    }
};

// OPPORTUNITIES
en.opportunities.section_label = 'Opportunities';
si.opportunities.section_label = 'අවස්ථා';

en.opportunities.job_types = { 'Full-Time': 'Full-Time', 'Part-Time': 'Part-Time' };
si.opportunities.job_types = { 'Full-Time': 'පූර්ණ කාලීන', 'Part-Time': 'අර්ධ කාලීන' };

// RESOURCES
en.resources = {
    page: {
        label: 'Resources',
        title: 'Awareness & Guidance Resources',
        desc: 'Explore articles, videos, and FAQs designed to help you make the right choice for your future.'
    },
    myths: {
        title: 'Common Myths vs Facts',
        univ: {
            myth: 'Myth: University is the only path to success.',
            fact: 'Over 60% of modern high-paying jobs in IT and technical fields require skills and certifications over traditional degrees.'
        },
        voc: {
            myth: 'Myth: Vocational training is for dropouts.',
            fact: 'The NVQ (National Vocational Qualification) framework is internationally recognized and can even lead to a degree (NVQ Level 7).'
        }
    },
    timeline: {
        title: 'After A/L Timeline Checklist',
        desc: 'This step-by-step timeline helps Sri Lankan school leavers plan their next steps after receiving A/L results.',
        note: 'This timeline is provided for guidance purposes only. Students are advised to verify information through official institutions before making final decisions.'
    },
    videos: {
        title: 'Video Guides'
    },
    official_links: {
        title: 'Official Education & Career Resources'
    },
    faqs: {
        title: 'Frequently Asked Questions'
    }
};

si.resources = {
    page: {
        label: 'සම්පත්',
        title: 'දැනුවත් කිරීම් සහ මාර්ගෝපදේශන සම්පත්',
        desc: 'ඔබේ අනාගතය සඳහා නිවැරදි තේරීමක් කිරීමට උපකාරී වන ලිපි, වීඩියෝ සහ නිතර අසන ප්‍රශ්න ගවේෂණය කරන්න.'
    },
    myths: {
        title: 'පොදු මිථ්‍යාවන් සහ කරුණු',
        univ: {
            myth: 'මිථ්‍යාව: සාර්ථකත්වයට ඇති එකම මාර්ගය විශ්වවිද්‍යාලයයි.',
            fact: 'තොරතුරු තාක්‍ෂණයේ සහ තාක්ෂණික ක්ෂේත්‍රවල නවීන අධි-ආදායම් ලබන රැකියාවලින් 60% කට වඩා වැඩි ප්‍රමාණයක් සම්ප්‍රදායික උපාධිවලට වඩා කුසලතා සහ සහතික අවශ්‍ය වේ.'
        },
        voc: {
            myth: 'මිථ්‍යාව: වෘත්තීය පුහුණුව පාසල් හැර ගිය අය සඳහා පමණි.',
            fact: 'NVQ රාමුව ජාත්‍යන්තරව පිළිගත් එකක් වන අතර එය උපාධියක් දක්වා (NVQ Level 7) ඔබව ගෙන යා හැක.'
        }
    },
    timeline: {
        title: 'උසස් පෙළින් පසු කාලරාමු පිරික්සුම් ලැයිස්තුව',
        desc: 'ශ්‍රී ලාංකීය පාසල් හැර යන සිසුන්ට උසස් පෙළ ප්‍රතිපල ලැබීමෙන් පසු ඔවුන්ගේ මීළඟ පියවර සැලසුම් කිරීමට මෙම පිරික්සුම් ලැයිස්තුව උපකාරී වේ.',
        note: 'මෙම කාලරාමුව මගපෙන්වීම සඳහා පමණක් සපයනු ලැබේ. අවසන් තීරණ ගැනීමට පෙර නිල ආයතන හරහා තොරතුරු තහවුරු කර ගන්නා ලෙස සිසුන්ට උපදෙස් දෙනු ලැබේ.'
    },
    videos: {
        title: 'වීඩියෝ මාර්ගෝපදේශ'
    },
    official_links: {
        title: 'නිල අධ්‍යාපන සහ වෘත්තීය සම්පත්'
    },
    faqs: {
        title: 'නිතර අසන ප්‍රශ්න'
    }
};

// PATHWAY FINDER
en.pathwayFinder.results_data.university_education = {
    title: 'University Education',
    desc: 'Apply for state university admission via the UGC based on your A/L Z-score. Courses available in Arts, Science, Commerce, and Technology streams at universities island-wide.'
};
si.pathwayFinder.results_data.university_education = {
    title: 'විශ්වවිද්‍යාල අධ්‍යාපනය',
    desc: 'ඔබේ සාපෙළ/උපෙළ Z-ස්කෝර් මත පදනම්ව UGC හරහා රාජ්‍ය විශ්වවිද්‍යාල ප්‍රවේශය සඳහා අයදුම් කරන්න. කලා, විද්‍යා, වාණිජ සහ තාක්ෂණික අංශවලින් පාඨමාලා තිබේ.'
};

en.pathwayFinder.results_data.freelancing = {
    title: 'Freelancing',
    desc: 'Start your freelancing career by building skills in areas like graphic design, web development, content writing, digital marketing, and more. Platforms like Fiverr, Upwork, and Freelancer offer opportunities to work with clients worldwide.'
};
si.pathwayFinder.results_data.freelancing = {
    title: 'ෆ්‍රීලාන්සිං (නිදහස් වෘත්තීන්)',
    desc: 'ග්‍රැෆික් නිර්මාණ, වෙබ් සංවර්ධන, අන්තර්ගත ලිවීම් ආදී කුසලතා ගොඩනගා ගනිමින් ඔබේ ෆ්‍රීලාන්සිං වෘත්තිය ආරම්භ කරන්න. Fiverr, Upwork වැනි වේදිකා හරහා ලෝක මට්ටමේ සේවාදායකයින් සමඟ වැඩ කළ හැක.'
};

en.pathwayFinder.results_data.own_business = {
    title: 'Own Business',
    desc: 'Start your own business venture! Explore entrepreneurship opportunities, learn about business planning, marketing, finance, and management. Government programs and private incubators can help you launch and grow your business.'
};
si.pathwayFinder.results_data.own_business = {
    title: 'තමාගේම ව්‍යාපාරය',
    desc: 'ඔබේම ව්‍යාපාරයක් ආරම්භ කරන්න! ව්‍යවසායකත්ව අවස්ථා ගවේෂණය කර ව්‍යාපාර සැලසුම්, අලෙවිකරණය සහ මූල්‍ය ගැන ඉගෙන ගන්න.'
};


fs.writeFileSync(pathEn, JSON.stringify(en, null, 2));
fs.writeFileSync(pathSi, JSON.stringify(si, null, 2));
console.log("Translations successfully updated without touching courses.");
