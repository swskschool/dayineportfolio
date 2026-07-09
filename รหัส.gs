function doGet() {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('E-Portfolio Dayin Leela')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ฟังก์ชันสนับสนุนในการรวมไฟล์ HTML ย่อย (ถ้าต้องการ)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
