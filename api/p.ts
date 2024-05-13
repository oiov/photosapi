import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const baseUrl =
    "https://pan.vmail.dev/r1/%F0%9F%A5%B5%E5%B0%8F%E5%A7%90%E5%A7%90%E7%9A%84%E5%AE%B6/";
  let photoList: string[] = [];
  let { query } = req;

  const reqPage = query.p;
  const pageGroup = ["AAA", "BBB", "CCC", "DDD", "FFF", "GGG"];

  if (!reqPage || pageGroup.indexOf(reqPage) === -1) {
    return res.send({ code: 403, data: null, msg: "Invalid page" });
  } else {
    try {
      for (let i = 1; i < 101; i++) {
        photoList.push(baseUrl + reqPage + "/n" + i + ".jpg");
      }

      return res.send({
        code: 200,
        data: {
          currentPage: query.p,
          photoNum: photoList.length,
          photoList: photoList,
          info: "图片来源于网络，仅供个人娱乐。仓库地址：https://github.com/oiov/photosapi",
        },
        msg: "success",
      });
    } catch (e) {
      return res.send({ code: 500, data: {}, msg: "崩崩崩...崩溃了..." });
    }
  }
}
