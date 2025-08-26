import { saveAs } from 'file-saver';

export function exportHtmlToWord(htmlString, filename = '文档.doc') {
  // 拼接 Word MIME 包装结构（可调样式）
  const content = `
    <!DOCTYPE html>
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'
          xmlns='http://www.w3.org/TR/REC-html40'>
    <head>
      <meta charset='utf-8'>
      <title>Export HTML to Word</title>
      <style>
      @font-face {
    font-family: '方正小标宋_GBK';
    src: url('/public/font/FZXBSK.TTF')format('truetype');
}
        body {
          font-family: '仿宋','方正小标宋_GBK','FZSmallSong_GBK','SimSun', 'SimHei', 'Microsoft YaHei', sans-serif;
          font-size: 21px;
          line-height: 1;
        }
        h1 {
          font-family: '方正小标宋_GBK';
          font-size: 29px;
          text-align: center;
        }
        h2 {
          font-family: 'SimHei';
          font-size: 21px;
        }
        h3 {
          font-family: 'SimHei';
          font-size: 21px;
        }
        p {
          font-family: '仿宋';
          font-size: 21px;
        }
      </style>
    </head>
    <body>
      ${htmlString}
    </body>
    </html>
  `;

  const blob = new Blob(['\ufeff', content], {
    type: 'application/msword'
  });

  saveAs(blob, filename);
}
