const catalogItems = [
  {ar:'الباب المسطح',en:'Flat Door',img:'flat-door.jpg'},
  {ar:'الأبواب الكلاسيكية',en:'Classic Doors',img:'classic-doors.jpg'},
  {ar:'باب بشريط معدني',en:'Door with Steel Strip',img:'door-with-steel-strip.jpg'},
  {ar:'باب بكسوة علوية',en:'Door with Upper Cladding',img:'door-with-upper-cladding.jpg'},
  {ar:'الباب المخفي',en:'Hidden Door',img:'hidden-door.jpg'},
  {ar:'الباب المخفي — غرفة',en:'Hidden Door — Room',img:'hidden-door-room.jpg'},
  {ar:'أبواب منزلقة',en:'Sliding Doors',img:'sliding-doors.jpg'},
  {ar:'باب واحد ونصف',en:'One and Half Leaf Door',img:'one-and-half-leaf.jpg'},
  {ar:'الباب المزدوج',en:'Double Door',img:'double-door.jpg'},

];

const copy = {
  ar:{
    'nav.about':'من نحن','nav.vision':'رؤيتنا','nav.catalog':'الكتالوج','nav.facility':'المصنع','nav.contact':'تواصل معنا',
    'hero.eyebrow':'WPC DOORS • CATALOG','hero.title1':'شركة الخطوط','hero.title2':'الحديثة للصناعة','hero.text':'رؤية صناعية حديثة لحلول الأبواب والمنتجات المعمارية المصنوعة من WPC.','hero.cta':'استعرض الكتالوج','hero.about':'تعرف علينا','hero.meters':'متر مربع','hero.doors':'باب يوميًا','hero.location':'المدينة الصناعية الثانية','hero.scroll':'اكتشف المزيد',
    'about.kicker':'ABOUT US','about.title':'نصنع حلولًا حديثة<br>للأبواب المعمارية.','about.p1':'في قلب المدينة الصناعية الثانية بجدة تمتد شركة الخطوط الحديثة للصناعة على مساحة تقارب 10,000 متر مربع، لتجسد رؤية صناعية حديثة في قطاع حلول الأبواب والمنتجات المعمارية.','about.p2':'نفخر بكوننا أول مصنع في المنطقة الغربية ومن أوائل المصانع في المملكة العربية السعودية في إنتاج أبواب WPC، كما نعد من أكبر المصانع المتخصصة في هذا المجال في المملكة والشرق الأوسط.','about.p3':'تبلغ طاقتنا الإنتاجية حتى 500 باب يوميًا، مع الالتزام بتقديم منتجات تجمع بين الجودة العالية والتقنية الحديثة والموثوقية بما يلبي احتياجات المشاريع السكنية والتجارية والحكومية بكفاءة واستدامة.',
    'vision.kicker':'OUR VISION','vision.title':'أن نكون رمزًا عالميًا للجودة والابتكار في صناعة أبواب WPC.','vision.text':'مستلهمين طموحنا من رؤية المملكة العربية السعودية 2030.',
    'catalog.kicker':'SELECTED CATALOG','catalog.title':'مجموعة من تصاميم الأبواب','catalog.text':'استعراض بصري لبعض صفحات الكتالوج والتصاميم، دون عرضها كمنتجات للبيع.',
    'facility.kicker':'OUR FACILITY','facility.title':'من قلب المدينة الصناعية الثانية بجدة.','facility.text':'مساحة صناعية مجهزة لتعكس نهج الشركة الحديث في تصنيع حلول الأبواب، مع حضور واضح للتقنية والتنظيم والطاقة الإنتاجية.','facility.stat1':'مساحة الشركة','facility.stat2':'باب كحد أقصى يوميًا',
    'contact.kicker':'CONTACT','contact.title':'تواصل معنا','contact.text':'للاستفسارات والتواصل مع شركة الخطوط الحديثة للصناعة.','contact.location':'المملكة العربية السعودية — جدة، المدينة الصناعية الثانية',
    'footer':'شركة الخطوط الحديثة للصناعة • WPC Doors','footer.top':'العودة للأعلى ↑','modal.note':'صفحة من كتالوج MLC — للاستعراض فقط'
  },
  en:{
    'nav.about':'About Us','nav.vision':'Our Vision','nav.catalog':'Catalog','nav.facility':'Our Facility','nav.contact':'Contact',
    'hero.eyebrow':'WPC DOORS • CATALOG','hero.title1':'Modern Lines','hero.title2':'Company for Industry','hero.text':'A modern industrial vision for WPC door solutions and architectural products.','hero.cta':'Explore Catalog','hero.about':'About MLC','hero.meters':'square meters','hero.doors':'doors per day','hero.location':'Second Industrial City','hero.scroll':'Explore more',
    'about.kicker':'ABOUT US','about.title':'Modern solutions<br>for architectural doors.','about.p1':"At the heart of Jeddah's Second Industrial City, Modern Lines for Industry spans approximately 10,000 square meters, embodying a modern industrial vision in the door solutions and architectural products sector.",'about.p2':'We are proud to be the first factory in the Western Region and one of the first factories in the Kingdom of Saudi Arabia to produce WPC doors. We are also among the largest factories specializing in this field in the Kingdom and the Middle East.','about.p3':'Our production capacity reaches up to 500 doors per day, committed to providing products that combine high quality, modern technology and reliability to efficiently and sustainably meet residential, commercial and governmental project needs.',
    'vision.kicker':'OUR VISION','vision.title':'To be a global symbol of quality and innovation in the WPC door industry.','vision.text':'Inspired by our ambition and the vision of Saudi Arabia 2030.',
    'catalog.kicker':'SELECTED CATALOG','catalog.title':'A selection of door designs','catalog.text':'A visual showcase of selected catalog pages and designs — presented for reference, not as products for sale.',
    'facility.kicker':'OUR FACILITY','facility.title':'At the heart of Jeddah’s Second Industrial City.','facility.text':'An industrial facility reflecting the company’s modern approach to door manufacturing, with a clear focus on technology, organization and production capacity.','facility.stat1':'Company area','facility.stat2':'Maximum doors per day',
    'contact.kicker':'CONTACT','contact.title':'Let’s talk about your project.','contact.text':'For inquiries and communication with Modern Lines Company for Industry.','contact.location':'Kingdom of Saudi Arabia — Jeddah, Second Industrial City',
    'footer':'Modern Lines Company for Industry • WPC Doors','footer.top':'Back to top ↑','modal.note':'Page from the MLC catalog — for reference only'
  }
};

let lang='ar';
const root=document.documentElement;
const body=document.body;
const grid=document.getElementById('catalogGrid');
const modal=document.getElementById('catalogModal');
const modalImage=document.getElementById('modalImage');
const modalLabel=document.getElementById('modalLabel');

function renderCatalog(){
  grid.innerHTML=catalogItems.map((item,i)=>`<button class="catalog-item" type="button" data-index="${i}"><div class="catalog-thumb"><img loading="lazy" src="assets/catalog/${item.img}" alt="${item.en}"></div><div class="catalog-label"><strong>${item[lang]}</strong><span>${String(i+1).padStart(2,'0')}</span></div></button>`).join('');
  grid.querySelectorAll('.catalog-item').forEach(btn=>btn.addEventListener('click',()=>openModal(Number(btn.dataset.index))));
}
function applyLanguage(){
  root.lang=lang; root.dir=lang==='ar'?'rtl':'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(copy[lang][key]!==undefined)el.innerHTML=copy[lang][key]});
  document.getElementById('langToggle').textContent=lang==='ar'?'EN':'AR';
  document.title=lang==='ar'?'MLC — Modern Lines Company for Industry':'MLC — Modern Lines Company for Industry';
  renderCatalog();
}
function openModal(index){
  const item=catalogItems[index]; modalImage.src=`assets/catalog/${item.img}`; modalImage.alt=item.en; modalLabel.textContent=item[lang]; modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}

document.getElementById('langToggle').addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';applyLanguage()});
document.getElementById('modalClose').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
const menu=document.getElementById('mobileNav');
document.getElementById('menuToggle').addEventListener('click',()=>menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
applyLanguage();
