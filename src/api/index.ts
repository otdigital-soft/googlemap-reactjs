import APIClient from "./client";

export const getLeads = async (params: any = {}) => {
  try {
    const {
      data: { data },
    } = await APIClient.get("/product-leads/get-all", params);
    return data;
  } catch (e) {
    throw e;
  }
};

export const getAgents = async () => {
  try {
    const {
      data: { data },
    } = await APIClient.get("/users/get-all?role=agent");
    return data;
  } catch (e) {
    throw e;
  }
};

export const getClients = async () => {
  try {
    const {
      data: { data },
    } = await APIClient.get("/users/get-all?role=client");
    return data;
  } catch (e) {
    throw e;
  }
};

export const getCategories = async () => {
  try {
    const {
      data: { data },
    } = await APIClient.get("/categories");
    return data;
  } catch (e) {
    throw e;
  }
};

export const getProducts = async () => {
  try {
    const {
      data: { data },
    } = await APIClient.get("/products");
    return data;
  } catch (e) {
    throw e;
  }
};
