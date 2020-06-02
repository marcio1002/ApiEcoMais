const { prototype, permission, requestPermission, } = window.Notification;

let message =
{
    title: String,
    opt: {
        badge: String,
        body: String,
        data: null,
        dir: "auto",
        icon: String,
        image: String,
        lang: String,
        tag: String,
        sound: String,
        timestamp: Number,
        vibrate: [Number],
        noscreen: String,
        sticky: Boolean,
        renotify: Boolean,
        actions: [Object],
        requireInteraction: Boolean,
        silent: Boolean,
    }
}
let option =
{
    method: String,
    type: String,
    url: String,
    cache: Boolean,
    mycustomtype: String,
    contentType: String | Boolean,
    processData: Boolean,
    dataType: String,
    async: Boolean,
    data: Object,
    accepts: Object,
    xhrFields: Object,
    statusCode: Object,
    beforeSend: Function,
    complete: Function,
    error: Function,
    dataFilter: Function,
    success: Function,
    complete: Function,

}

async function searchCep(cep) {
    const validcep = /\d{8}$/;
    if (!validcep.test(cep)) throw TypeError('Invalid zip code');

    const info = await $.get(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (info.erro) return null;
    return info;

}

/**
 * @param {Object} op
 * Defini uma opção de parametros para o ajax;
 */
function reqAjax(opt = option) {
    $.ajax(opt);
}

const apiNotification = {

    setPermission: async () => {
        return await requestPermission();
    },

    /**
     * @var {Object} msg
     */
    message: (msg = message) => {
        let notfy = new Notification(msg.title, msg.opt);
        return notfy
    },
}