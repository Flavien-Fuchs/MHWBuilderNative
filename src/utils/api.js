import axios from "axios";

export const armorApi = (setter) => {
    return axios
        .get("https://mhw-db.com/armor")
        .then((response) => setter(response.data))
        .catch((err) => {
            throw new Error("Problem whith API to download armor content : ", err);
        });
};

export const weaponApi = (setter) => {
    return axios
        .get("https://mhw-db.com/weapons")
        .then((response) => setter(response.data))
        .catch((err) => {
            throw new Error("Problem whith API to download weapon content : ", err);
        });
};

export const charmsApi = (setter) => {
    return axios
        .get("https://mhw-db.com/charms")
        .then((response) => setter(response.data))
        .catch((err) => {
            throw new Error("Problem whith API to download charms content : ", err);
        });
};

export const skillsApi = (setter) => {
    return axios
        .get("https://mhw-db.com/skills")
        .then((response) => setter(response.data))
        .catch((err) => {
            throw new Error("Problem whith API to download skills content : ", err);
        });
};