// import { $node } from "@jx3box/jx3box-common/js/https";
// const $ = $node()

import axios from "axios";
import { __dataPath } from "@jx3box/jx3box-common/data/jx3box.json";
const $ = axios.create({
    // baseURL: 'http://localhost:7002/',
    baseURL: __dataPath,
});
import xfmap from "@jx3box/jx3box-data/data/xf/xf.json";

function getSkill(xf) {
    // return $.get("/bps/skill/" + xfmap[xf]["force"]).then((res) => {
    //     return res.data;
    // });
    return $.get(`/bps/v1/${xfmap[xf]["force"]}/skill.json`).then((res) => {
        return res.data?.data;
    });
}

function getTalent(xf) {
    // return $.get("/bps/talent/" + xfmap[xf]["force"]).then((res) => {
    //     return res.data;
    // });
    return $.get(`/bps/v1/${xfmap[xf]["force"]}/talent.json`).then((res) => {
        return res.data?.data;
    });
}

function getAll(xf) {
    return $.get("/bps/skill-talent/" + xfmap[xf]["force"]).then((res) => {
        return res.data;
    });
}

export { getSkill, getTalent, getAll };
