export let config = {
    url:"",
    data: null,
    method: "",
    headers: {
      Authorization: localStorage.getItem("accessToken"),
    },
  };

