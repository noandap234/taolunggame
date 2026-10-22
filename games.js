// ===== รายการเกมของ TaoLung Launcher =====
// แก้ไฟล์นี้บน GitHub (repo taolung) แล้ว Commit — โปรแกรมจะอ่านตอนเปิดครั้งถัดไป (GitHub อาจหน่วง 1-5 นาที)
//
// เพิ่มเกม = คัดลอกก้อน { ... } แล้วเปลี่ยนค่า ใส่เครื่องหมาย , ท้ายก้อน
//   id          ชื่อโฟลเดอร์เก็บเกมในเครื่อง (ภาษาอังกฤษ/ตัวเลข ห้ามซ้ำกัน) — ต้องตรงกับ game_id ใน TaoLung Admin ถ้าจะขาย
//   title       ชื่อที่โชว์บนการ์ด
//   desc        คำอธิบายสั้น ๆ
//   repo        GitHub repo ที่ปล่อยเกม เช่น 'noandap234/TLRun' (ต้อง public)
//   asset       ชื่อไฟล์ที่แนบใน Release ล่าสุด (.exe หรือ .zip)
//   exe         ชื่อไฟล์ที่ใช้เปิดเกม (ถ้า asset เป็น .exe ก็ชื่อเดียวกัน, ถ้าเป็น .zip คือชื่อ exe ที่อยู่ในนั้น)
//   needsBridge true = เกมนี้ใช้ตัวกลาง TikTok / false = ไม่ใช้
//   icon        ลิงก์รูป (ไม่ใส่ก็ได้ ถ้าแนบไฟล์ icon.png ใน Release โปรแกรมจะหยิบเอง)
//
// ---- ช่องเสริม (ไม่ใส่ก็ได้) ----
//   tagline     คำโปรยใต้ชื่อเกม
//   about       รายละเอียดเกม
//   badges      ป้าย: 'new' · 'hot' · 'easy' · 'recommend' · 'popular'
//   banner      รูปแนวนอนใหญ่ (ลิงก์ https)
//   gallery     รูปในแกลเลอรี่ ['ลิงก์1', 'ลิงก์2']
//
// อัปเดตเกม = สร้าง Release ใหม่ใน repo ของเกม ตั้ง tag เป็นเลขสูงขึ้น (v1.0.1) แนบไฟล์ใหม่ — ไม่ต้องแก้ไฟล์นี้
// ราคาเกมตั้งในโปรแกรม TaoLung Admin (ไม่ได้ตั้งในไฟล์นี้)

const GAMES_DATA = [
  {
    id: 'TaoLungRun',
    title: 'TaoLung Run',
    desc: 'วิ่งสู่เส้นชัย',
    repo: 'noandap234/TLRun',
    asset: 'runner.exe',
    exe: 'runner.exe',
    needsBridge: true,
    icon: 'icon.png',
  },
  {
    id: 'TaoLungRace',
    title: 'TaoLung Race',
    desc: 'แข่งรถ',
    repo: 'noandap234/tlrack',
    asset: 'race.exe',
    exe: 'race.exe',
    needsBridge: true,
    icon: 'icon.png',
  },
  {
    id: 'KiraeveRoad',
    title: 'Kiraeve Road',
    desc: 'วิ่งหลบรถเข้าเส้นชัย',
    repo: 'noandap234/KiraeveRoad',
    asset: 'road.exe',
    exe: 'road.exe',
    needsBridge: true,
    icon: 'icon.png',
  },
  {
    id: 'Kiraeveboat',
    title: 'Kiraeve boat',
    desc: 'แข่งเรือ',
    repo: 'noandap234/boatracing',
    asset: 'boat.exe',
    exe: 'boat.exe',
    needsBridge: true,
    icon: 'icon.png',
  },
];

const TAOLUNG_API = 'https://taolung-api.noandap234.workers.dev';
const LAUNCHER_DATA = { repo: 'noandap234/taolunggame', asset: 'TaoLungLauncher-Setup.exe' };
