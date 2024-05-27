import React, { useEffect, useState, useCallback } from "react";
import SideList from "./SideList.js";
import { useLocation } from "react-router-dom";
import { Tabs } from "antd";

const CourseWatch = (props) => {
  const { state } = useLocation();
  const [data, setData] = useState(null);

  const [currVideo,setCurrVideo] = useState()

  useEffect(() => {
    (async () => {
      // let playlistUrl="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults="+state.data.length +"&playlistId="+state.data.link   +"&key="+process.env.REACT_APP_API_KEY2
      // const data = await fetch(playlistUrl)
      // const newData = await data.json()
      const newData = {
        kind: "youtube#playlistItemListResponse",
        etag: "grmR7obOV3yXc0ZOV0hphIbBQsU",
        nextPageToken:
          "EAAajgFQVDpDQlFpRURJd09FRXlRMEUyTkVNeU5ERkJPRFVvQVVqai1waWJzYTM3QWxBQldrVWlRMmxLVVZSSVZYZFdNVGcxWWtWc1NrOVhSbTlWYWtacFlrWmtXV1ZIWkZSaVJYY3daVlJzY0ZWVlNuVlVTRUpUUldkM1NUQndka2x0ZDFsUmRVc3lVV3RSUlNJ",
        items: [
          {
            kind: "youtube#playlistItem",
            etag: "qQRyFTRDTt-MJYY_0kQZiGR5itQ",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi41NkI0NEY2RDEwNTU3Q0M2",
            snippet: {
              publishedAt: "2022-07-14T12:52:02Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/01IntroductiontoJs\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nBookmark and save the playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nCode Backup Repository: https://github.com/CodeWithHarry/ultimate-js-course-youtube\nTimeStamps: \n00:00-01:07 (Introduction)\n01:07-04:09 (Introduction to programming) \n04:09-06:07 (Ecmascript)\n06:07-08:34 (How to execute javascript code)\n08:34-13:00 (Replit)\n13:00-13:45 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: https://www.instagram.com/codewithharry\npython, C, C++, Java, JavaScript, and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/ER9SspLe4Hg/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/ER9SspLe4Hg/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/ER9SspLe4Hg/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/ER9SspLe4Hg/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 0,
              resourceId: {
                kind: "youtube#video",
                videoId: "ER9SspLe4Hg",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "_xloD-Fbg-hB6ys-qSAtOMq4E2U",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi4yODlGNEE0NkRGMEEzMEQy",
            snippet: {
              publishedAt: "2022-07-15T16:20:00Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Variables in JavaScript | JavaScript Tutorial in Hindi #2",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/02Variables#index.js\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nBookmark and save the playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimestamps: \n00:00-01:40 (Introduction)\n01:40-02:40 (Setting up Repl in replit)\n02:40-05:35 (Variable and Data)\n05:35-11:33 (Variable and its rules)\n11:33-13:33 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/Q4p8vRQX8uY/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/Q4p8vRQX8uY/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/Q4p8vRQX8uY/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/Q4p8vRQX8uY/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/Q4p8vRQX8uY/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 1,
              resourceId: {
                kind: "youtube#video",
                videoId: "Q4p8vRQX8uY",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "z5DE3zGCMiQKOKETSLhfpeM49M4",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi4wMTcyMDhGQUE4NTIzM0Y5",
            snippet: {
              publishedAt: "2022-07-17T10:17:29Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "const, let and var in JavaScript | JavaScript Tutorial in Hindi #3",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/03varletconst\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nBookmark and save the playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimestamps: \n00:00-01:08 (Introduction)\n01:08-04:00 (let, var and const)\n04:00-08:47 (Scope of let)\n08:47-12:05 (Scope of const)\n12:05-12:57 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/Icev9Oxf0WA/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/Icev9Oxf0WA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/Icev9Oxf0WA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/Icev9Oxf0WA/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/Icev9Oxf0WA/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 2,
              resourceId: {
                kind: "youtube#video",
                videoId: "Icev9Oxf0WA",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "JYHNGnHqdLLzlufJQRyFZuO0Ins",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi41MjE1MkI0OTQ2QzJGNzNG",
            snippet: {
              publishedAt: "2022-07-18T21:11:05Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Primitives and Objects in JavaScript | JavaScript Tutorial in Hindi #4",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/04primitivesobjects\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nBookmark and save the playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimestamps: \n00:00-01:18 (Introduction)\n01:18-08:10 (Primitive Datatypes in JS)\n08:10-11:00 (Object)\n11:00-11:31 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/qpU3WIqRz9I/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/qpU3WIqRz9I/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/qpU3WIqRz9I/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/qpU3WIqRz9I/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/qpU3WIqRz9I/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 3,
              resourceId: {
                kind: "youtube#video",
                videoId: "qpU3WIqRz9I",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "Di9_RjkS2NooGbMhznnDvaIha-I",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi4wOTA3OTZBNzVEMTUzOTMy",
            snippet: {
              publishedAt: "2022-07-20T08:18:45Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "JavaScript  Chapter 1 - Practice Set | JavaScript Tutorial in Hindi #5",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/05Chapter1PS\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nBookmark and save the playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimestamps: \n00:00-00:20 (Introduction)\n00:20-01:40 (CH-1 practice set)\n01:40-02:30 (Q1)\n02:30-03:37 (Q2)\n03:37-04:48 (Q3)\n04:48-05:48 (Q3 repeat)\n05:48-08:58 (Q4)\n08:58-11:23 (Q5)\n11:23-12:24 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/vA-AAeqkpxM/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/vA-AAeqkpxM/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/vA-AAeqkpxM/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/vA-AAeqkpxM/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/vA-AAeqkpxM/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 4,
              resourceId: {
                kind: "youtube#video",
                videoId: "vA-AAeqkpxM",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "C3x0ziGRoLCBHbwg_vWBuz-w24g",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi4xMkVGQjNCMUM1N0RFNEUx",
            snippet: {
              publishedAt: "2022-07-23T12:07:48Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "JavaScript Operators and Expressions | JavaScript Tutorial in Hindi #6",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/06Operators?v=1\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nBookmark and save the playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimestamps: \n00:00-01:20 (Introduction)\n01:20-03:24 (Ch-2 Operators)\n03:24-10:58 (Arithmetic Operators)\n10:58-13:27 (Assignment Operators)\n13:27-17:09 (Comparison Operators)\n17:09-20:51 (Logical Operators)\n20:51-22:35 (Comments)\n22:35-23:25 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/lsV8JQgSW1s/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/lsV8JQgSW1s/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/lsV8JQgSW1s/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/lsV8JQgSW1s/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/lsV8JQgSW1s/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 5,
              resourceId: {
                kind: "youtube#video",
                videoId: "lsV8JQgSW1s",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "Yj2MVlNbnfGSS_OD7hmoMK9gnAg",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi41MzJCQjBCNDIyRkJDN0VD",
            snippet: {
              publishedAt: "2022-07-24T09:02:11Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Conditional expressions in JavaScript | JavaScript Tutorial in Hindi #7",
              description:
                'This video talks about if - else - else if conditional expressions in JavaScript \nLink to the Repl - https://replit.com/@codewithharry/07Conditionals\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nBookmark and save the playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimestamps: \n00:00-01:10 (Introduction)\n01:10-02:18 (Conditional Expressions)\n02:18-07:08 (prompt & alert function)\n07:08-08:42 (if statement)\n08:42-14:48 (if, else if, else statements)\n14:48-16:58 (Homework)\n16:58-19:55 (Ternary operator)\n19:55-20:58 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/s5Lu4QTjeL0/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/s5Lu4QTjeL0/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/s5Lu4QTjeL0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/s5Lu4QTjeL0/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/s5Lu4QTjeL0/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 6,
              resourceId: {
                kind: "youtube#video",
                videoId: "s5Lu4QTjeL0",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "jSJ1ljg6ZPpZe7H0qpzwWhuUK5s",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi5DQUNERDQ2NkIzRUQxNTY1",
            snippet: {
              publishedAt: "2022-07-26T15:03:34Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "JavaScript Chapter 2 - Practice Set on Operators and Conditionals | JavaScript Tutorial in Hindi #8",
              description:
                'This video talks about if - else - else if conditional expressions in JavaScript \nLink to the Repl - https://replit.com/@codewithharry/08Chapter2PS\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimestamps: \n00:00-01:07 (Introduction)\n01:07-04:39 (Q1, Ch-2 practice test)\n04:39-08:52 (Q2)\n08:52-10:44 (Q3)\n10:44-11:37 (Q4)\n11:37-13:20 (Q5)\n13:20-14:04 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/W77qmqrhCcA/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/W77qmqrhCcA/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/W77qmqrhCcA/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/W77qmqrhCcA/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/W77qmqrhCcA/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 7,
              resourceId: {
                kind: "youtube#video",
                videoId: "W77qmqrhCcA",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "7KekPgkYnHkl2GLJ5ryPJvblsaE",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi45NDk1REZENzhEMzU5MDQz",
            snippet: {
              publishedAt: "2022-07-27T09:18:58Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "For Loops in JavaScript | JavaScript Tutorial in Hindi #9",
              description:
                'This video talks about for loops in JavaScript\nLink to the Repl - https://replit.com/@codewithharry/09forloops\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nTimeStamps: \n00:00-00:50 (Introduction)\n00:50-02:53 (Ch-3: loops and functions)\n02:53-12:17 (for loops)\n12:17-14:22 (for-in-loops)\n14:22-16:14 (for-of-loops)\n16:14-18:33 (for loop in detail)\n18:33-19:39 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript, and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/XKyyM1VWtUE/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/XKyyM1VWtUE/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/XKyyM1VWtUE/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/XKyyM1VWtUE/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/XKyyM1VWtUE/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 8,
              resourceId: {
                kind: "youtube#video",
                videoId: "XKyyM1VWtUE",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "a7_hANp31L7ln2fqocIVVCtTL2A",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi5GNjNDRDREMDQxOThCMDQ2",
            snippet: {
              publishedAt: "2022-07-29T10:30:39Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "While Loops in JavaScript | JavaScript Tutorial in Hindi #10",
              description:
                'This video talks about if - else - else if conditional expressions in JavaScript \nLink to the Repl - https://replit.com/@codewithharry/10whileloops#index.js\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\nTimeStamps:\n00:00-00:36 (Introduction)\n00:36-07:41 (Ch-3, loops and functions)\n07:41-10:38 (for loops)\n10:38-11:07 (Discussion)\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/drEjyBSu33w/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/drEjyBSu33w/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/drEjyBSu33w/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/drEjyBSu33w/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/drEjyBSu33w/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 9,
              resourceId: {
                kind: "youtube#video",
                videoId: "drEjyBSu33w",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "GzyM3owavPlLmVP0YQeYOqY1b2I",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi40NzZCMERDMjVEN0RFRThB",
            snippet: {
              publishedAt: "2022-07-30T14:48:29Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Functions in JavaScript | JavaScript Tutorial in Hindi #11",
              description:
                'This video is about functions in JavaScript\nLink to the Repl - https://replit.com/@codewithharry/11functions\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/a_gwOwkbhZ0/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/a_gwOwkbhZ0/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/a_gwOwkbhZ0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/a_gwOwkbhZ0/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/a_gwOwkbhZ0/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 10,
              resourceId: {
                kind: "youtube#video",
                videoId: "a_gwOwkbhZ0",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "WblgEBhSaX3fLq_kDGN4LbZcmzg",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi5EMEEwRUY5M0RDRTU3NDJC",
            snippet: {
              publishedAt: "2022-07-31T11:29:40Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "JavaScript Chapter 3 - Practice Set on Loops and Functions | JavaScript Tutorial in Hindi #12",
              description:
                'This video is about some practice questions on loops and functions in JavaScript\nLink to the Repl - https://replit.com/@codewithharry/12Chapter3PS\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/ZAOipfPnb3s/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/ZAOipfPnb3s/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/ZAOipfPnb3s/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/ZAOipfPnb3s/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/ZAOipfPnb3s/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 11,
              resourceId: {
                kind: "youtube#video",
                videoId: "ZAOipfPnb3s",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "RPcTjgdDt-z6A1jRQb-C-oMT5BA",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi45ODRDNTg0QjA4NkFBNkQy",
            snippet: {
              publishedAt: "2022-08-02T12:47:19Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Introduction to Strings | JavaScript Tutorial in Hindi #13",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/13Strings\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/Yafji9PB1lM/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/Yafji9PB1lM/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/Yafji9PB1lM/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/Yafji9PB1lM/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/Yafji9PB1lM/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 12,
              resourceId: {
                kind: "youtube#video",
                videoId: "Yafji9PB1lM",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "bJvEORD-qWLKxnSQRlzno0VAOSs",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi4zMDg5MkQ5MEVDMEM1NTg2",
            snippet: {
              publishedAt: "2022-08-02T15:52:07Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "JavaScript String Methods | JavaScript Tutorial in Hindi #14",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/14StringMethods\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/8yg4RUEnaIk/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/8yg4RUEnaIk/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/8yg4RUEnaIk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/8yg4RUEnaIk/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/8yg4RUEnaIk/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 13,
              resourceId: {
                kind: "youtube#video",
                videoId: "8yg4RUEnaIk",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "RTS28cEJQCuZQdyjopvW4IQ1G5M",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi41Mzk2QTAxMTkzNDk4MDhF",
            snippet: {
              publishedAt: "2022-08-04T13:08:07Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "JavaScript Chapter 4 - Practice Set on Strings | JavaScript Tutorial in Hindi #15",
              description:
                'Let\'s solve some practice questions around Strings.\nLink to the Repl - https://replit.com/@codewithharry/15Chapter4PS\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/Wj3wGP1g5z8/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/Wj3wGP1g5z8/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/Wj3wGP1g5z8/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/Wj3wGP1g5z8/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/Wj3wGP1g5z8/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 14,
              resourceId: {
                kind: "youtube#video",
                videoId: "Wj3wGP1g5z8",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "TO3rXDyPzfdlnlEClv6JiZZi8Pw",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi5EQUE1NTFDRjcwMDg0NEMz",
            snippet: {
              publishedAt: "2022-08-05T13:06:11Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Introduction to Arrays | JavaScript Tutorial in Hindi #16",
              description:
                'Let\'s understand what arrays are in JavaScript\nLink to the Repl - https://replit.com/@codewithharry/16Arrays\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/a_Bz5ciBHQ0/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/a_Bz5ciBHQ0/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/a_Bz5ciBHQ0/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/a_Bz5ciBHQ0/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/a_Bz5ciBHQ0/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 15,
              resourceId: {
                kind: "youtube#video",
                videoId: "a_Bz5ciBHQ0",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "1MzkmRNQgnUs0cz6AuATvNfjbOk",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi41QTY1Q0UxMTVCODczNThE",
            snippet: {
              publishedAt: "2022-08-06T09:47:42Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "JavaScript Array Methods | JavaScript Tutorial in Hindi #17",
              description:
                'Let\'s look at some array methods in JavaScript\nLink to the Repl - https://replit.com/@codewithharry/17Arraymethods1#index.js\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/BLIrBThPTXc/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/BLIrBThPTXc/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/BLIrBThPTXc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/BLIrBThPTXc/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/BLIrBThPTXc/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 16,
              resourceId: {
                kind: "youtube#video",
                videoId: "BLIrBThPTXc",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "qnRTThULYTmPRF-G4StK-fQY_0Y",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi4yMUQyQTQzMjRDNzMyQTMy",
            snippet: {
              publishedAt: "2022-08-09T11:38:05Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Some More JavaScript Array Methods | JavaScript Tutorial in Hindi #18",
              description:
                'Let\'s look at some more array methods in JavaScript\nLink to the Repl - https://replit.com/@codewithharry/18Arraymethods2\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/QxA-KB2lKgk/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/QxA-KB2lKgk/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/QxA-KB2lKgk/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/QxA-KB2lKgk/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/QxA-KB2lKgk/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 17,
              resourceId: {
                kind: "youtube#video",
                videoId: "QxA-KB2lKgk",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "IaGQyxwA-ldNAkUeNJJFg0-wngo",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi45RTgxNDRBMzUwRjQ0MDhC",
            snippet: {
              publishedAt: "2022-08-11T11:22:53Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Using Loops With Arrays in JavaScript | JavaScript Tutorial in Hindi #19",
              description:
                'Let\'s look at some methods to loop through Arrays in JavaScript\nLink to the Repl - https://replit.com/@codewithharry/19ArrayLoops\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/YWyr7Nug2oc/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/YWyr7Nug2oc/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/YWyr7Nug2oc/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/YWyr7Nug2oc/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/YWyr7Nug2oc/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 18,
              resourceId: {
                kind: "youtube#video",
                videoId: "YWyr7Nug2oc",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
          {
            kind: "youtube#playlistItem",
            etag: "eJFhlvkJp8UaquNf1QbtXwVcIGk",
            id: "UEx1MFdfOWxJSTlhaFIxYmxXWHhnU2xMNHk5aVFCbkxwUi5ENDU4Q0M4RDExNzM1Mjcy",
            snippet: {
              publishedAt: "2022-08-13T13:20:26Z",
              channelId: "UCeVMnSShP_Iviwkknt83cww",
              title:
                "Map, Filter & Reduce in JavaScript | JavaScript Tutorial in Hindi #20",
              description:
                'Link to the Repl - https://replit.com/@codewithharry/20mapfilterreduce\nJoin Replit - https://join.replit.com/CodeWithHarry\nDownload Notes - https://www.codewithharry.com/notes/\nUltimate JS Course Playlist: https://www.youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR\n►Checkout my English channel here: https://www.youtube.com/channel/UC7btqG2Ww0_2LwuQxpvo2HQ\n►Instagram: www.instagram.com/codewithharry\n\npython, C, C++, Java, JavaScript and Other Cheetsheets [++]:\nPlaylist: https://www.youtube.com/playlist?list=PLu0W_9lII9agrsRZjFECeFuWY5ev2pQlk\n\n►Learn in One Video[++]:\nPython[15 Hr] - https://www.youtube.com/watch?v=gfDE2a7MKjA&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython Advance[3.5 Hr] - https://www.youtube.com/watch?v=61a7UkDO50s&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[1 Hr] - https://www.youtube.com/watch?v=qHJjMvHLJdg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[2 Hr] - https://www.youtube.com/watch?v=ihk_Xglr164&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nPython[15 Min] -https://www.youtube.com/watch?v=fr1f84rg4Nw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJavaScript[1 Hr] - https://www.youtube.com/watch?v=onbBV0uFVpo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nC[1.3 Hr]-https://www.youtube.com/watch?v=YXcgD8hRHYY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[1 Hr] - https://www.youtube.com/watch?v=xW7ro3lwaCI&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[2.3 Hr] -https://www.youtube.com/watch?v=1SnPKhCdlsU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nphp[Project]- https://www.youtube.com/watch?v=-al2bECumKg&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nHTML[30 Min] -https://www.youtube.com/watch?v=E3ByCRqE7Lo&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[8.5 Hr] -https://www.youtube.com/watch?v=Edsxf_NBFrw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nCSS[1.4 Hr] -https://www.youtube.com/watch?v=u5-K_ua9sOw&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWordpress[3.2 Hr] -https://www.youtube.com/watch?v=GlLRYml8mCY&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAngular[2 Hr] -https://www.youtube.com/watch?v=0LhBvp8qpro&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJava[2.3 Hr] -https://www.youtube.com/watch?v=rV_3Lewxx6o&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nWeb Scraping[1 Hr] -https://www.youtube.com/watch?v=uufDGjTuq34&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nMongoDB[2 Hr] -https://www.youtube.com/watch?v=oSIv-E60NiU&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nNumpy[1 Hr] -https://www.youtube.com/watch?v=Rbh1rieb3zc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nAndroid Dev[12 Hr]- https://www.youtube.com/watch?v=mXjZQX3UzOs\nLinux[1 Hr] -https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nJQuery[1.1 Hr] -https://www.youtube.com/watch?v=YFlx1C8XwR0&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\nGit and GitHub[1.1 Hr] -https://www.youtube.com/watch?v=gwWKnnCMQ5c&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7\n\n►Complete course [playlist]:\nReact - https://www.youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt\nPython-https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME\nOOP Python-https://www.youtube.com/playlist?list=PLu0W_9lII9ahfRrhFcoB-4lpp9YaBmdCP\nJava -https://www.youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q\nJavaScript- https://www.youtube.com/playlist?list=PLu0W_9lII9ajyk081To1Cbt2eI5913SsL\nPHP-https://www.youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR\nC-https://www.youtube.com/playlist?list=PLu0W_9lII9aiXlHcLx-mDH1Qul38wD3aR\nC++-https://www.youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL\nGit & GitHub-https://www.youtube.com/playlist?list=PLu0W_9lII9ahVQekD7ePHmnirTePXwIln\nAndroid Dev- https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd\nPython GUI- https://www.youtube.com/playlist?list=PLu0W_9lII9ajLcqRcj4PoEihkukF_OTzA\nWeb Development- https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg\nPython Django -https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9\nProjects Using HTML, CSS & Javascript- https://www.youtube.com/playlist?list=PLu0W_9lII9aiQiOwthuSvinxoflmhRxM3\nData Structure and Algo -https://www.youtube.com/playlist?list=PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi \n\nFollow Me On Social Media\n►Website (created using Django Rest & Angular) - https://www.codewithharry.com\n►Facebook - https://www.facebook.com/CodeWithHarry\n►Instagram - https://www.instagram.com/codewithharry/ \nTwitter - https://twitter.com/CodeWithHarry\nComment "#HarryBhai" if you read this 😉😉',
              thumbnails: {
                default: {
                  url: "https://i.ytimg.com/vi/bAUMuuRH99o/default.jpg",
                  width: 120,
                  height: 90,
                },
                medium: {
                  url: "https://i.ytimg.com/vi/bAUMuuRH99o/mqdefault.jpg",
                  width: 320,
                  height: 180,
                },
                high: {
                  url: "https://i.ytimg.com/vi/bAUMuuRH99o/hqdefault.jpg",
                  width: 480,
                  height: 360,
                },
                standard: {
                  url: "https://i.ytimg.com/vi/bAUMuuRH99o/sddefault.jpg",
                  width: 640,
                  height: 480,
                },
                maxres: {
                  url: "https://i.ytimg.com/vi/bAUMuuRH99o/maxresdefault.jpg",
                  width: 1280,
                  height: 720,
                },
              },
              channelTitle: "CodeWithHarry",
              playlistId: "PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR",
              position: 19,
              resourceId: {
                kind: "youtube#video",
                videoId: "bAUMuuRH99o",
              },
              videoOwnerChannelTitle: "CodeWithHarry",
              videoOwnerChannelId: "UCeVMnSShP_Iviwkknt83cww",
            },
          },
        ],
        pageInfo: {
          totalResults: 103,
          resultsPerPage: 20,
        },
      };
      let response = await fetch("http://localhost:1231/mycourse/"+state.data._id)
      let json = await response.json()
      console.log("json" ,json)
      console.log(newData)
      setData(json);
      setCurrVideo(json.items[0])
    })();

    const sideLisstItem = document.querySelector("#sideListId");

    const navbarObserving = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        sideLisstItem.style.position = "initial";
        sideLisstItem.style.right = 0;
      } else {
        sideLisstItem.style.position = "fixed";
        sideLisstItem.style.top = 0;
        sideLisstItem.style.right = 0;
      }
    });

    navbarObserving.observe(document.querySelector("#headerId"));
  }, []);

console.log("data ",data)
  const items = [
    {
      key: "1",
      label: "Description",
      children: <html>{currVideo?.snippet?.description}</html>,
    },
    {
      key: "2",
      label: "Notes",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Comments",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div className="w-full flex">
      <div className="w-[80%]">
        {data && (
          <>
            <iframe
              width="100%"
              height="50%"
              src={
                "https://www.youtube.com/embed/" +
                currVideo?.snippet?.resourceId?.videoId
              }
              title="Youtube video"
              // frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div>
              <p className="m-3">{currVideo?.snippet?.title}</p>
              <Tabs className="m-3" defaultActiveKey="1" items={items} />
            </div>
          </>
        )}
      </div>
      <div id="sideListId" className="w-[19%]">
        <SideList videoList={data?.items} setCurrVideo={setCurrVideo} status={data?.completedStatus}/>
      </div>
    </div>
  );
};

export default CourseWatch;
