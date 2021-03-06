/**
 * 
 * @param {String} elem 
 * O elemento form para a validação
 */
function validaForm(elem = "") {
   var forError = false;

   $(`${elem} [data-required]:input`).each(function () {
      if ($(this).is("input"))
         if ($(this).val().length == 0) {
            forError = true;
            $(this).addClass("formError");
         }
      if ($(this).is("select"))
         if (!$(this).val() || $(this).val().length == 0) {
            forError = true;
            $(this).addClass("formError");
         }
   });

   return forError;
}

/**
 * 
 * @param {Event} event 
 * Um parâmetro de eventos do teclado
 */
function isNumber(event) {
   if (typeof event != "object" || !event) throw new ErrorEvent("Variable is not a type of keyboard event or is undefined");
   return (!isNaN(Number(event.key))) ? true : false;
};

function clearForm() {
   $('input[type=text]').val("");
   $('input[type=email]').val("");
   $('input[type=password]').val("");
   $('input[type=tel]').val("");
}

const datetime = {
   formatDateTime(string) {
      const datetime = string.split(" ");
      if (datetime) return `${datetime[0].split("-").reverse().join("/")} ${datetime[1]}`;
      return "";
   },

   formatDate(string) {
      const date = string.split(" ")[0].split("-").reverse().join("/");
      if (date) return date;
      return "";
   },

   dateNow() {
      const date = new Date;
      return date.toLocaleDateString();
   },

   timeNow() {
      const time = new Date;
      return time.toLocaleTimeString();
   }
}


function isMobile() {
   return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? true : false;
}
/**
 * 
 * @param {string} url 
 */
function getPropsUrl(url) {
   let obj = new Object;
   for ([key, val] of (new URLSearchParams((new URL(url)).search)).entries()) obj[key] = val;
   return obj || {}
}

function isValidEmail(email) {

   const array_Exp = new Array(
      ".com",
      ".br",
      ".org",
      ".net",
      ".sp",
      ".info",
      ".biz",
      ".name",
      ".cc",
      ".ws",
      ".mobi",
      ".in",
      ".me",
      ".online",
      ".site",
      ".top",
      ".club",
      ".website",
      ".link",
      ".vc",
      ".click",
      ".cool",
      ".men",
      ".gratis",
      ".plus",
      ".legal",
      ".email",
      ".host",
      ".tech",
      ".download",
      ".cloud",
      ".digital",
      ".software",
      ".webcam",
      ".chat",
      ".blog",
      ".network",
      ".vlog",
      ".flog",
      ".sale",
      ".store",
      ".shopping",
      ".shop",
      ".promo",
      ".news",
      ".live",
      ".review",
      ".love",
      ".capital",
      ".trade",
      ".work",
      ".business",
      ".ltda",
      ".company",
      ".ind",
      ".bar",
      ".pizza",
      ".beer",
      ".fit",
      ".pub",
      ".vodka",
      ".cafe",
      ".diet",
      ".wine",
      ".delivery",
      ".studio",
      ".hospital",
      ".stream",
      ".dog",
      ".pet",
      ".camera",
      ".gardem",
      ".global",
      ".sc",
      ".us",
      ".city",
      ".world",
      ".contagem",
      ".sampa",
      ".bsb",
      ".campinas",
      ".curitiba",
      ".floripa",
      ".goiana",
      ".joinville",
      ".poa",
      ".recife",
      ".rio",
      ".pro",
      ".taxi",
      ".bio",
      ".vet",
      ".coach",
      ".adm",
      ".adv",
      ".arq",
      ".cnt",
      ".eng",
      ".eti",
      ".med",
      ".mus",
      ".odo",
      ".gov"
   );
   const expDomain = array_Exp.join("|");
   const regExp = new RegExp("(.)+\@[a-z]+(" + expDomain + "){1,3}$", "g");

   return (regExp.test(email)) ? true : false;

}

/**
 * @param {string} elem
 * O elemento input:password para visualizar a senha
 */
function viewPasswd(elem) {
   let icon = $(elem).parent().find("#iconPasswd");
   let typeInput = ($(elem).is("[type='password']")) ? 'text' : 'password'
   let [removeIcon, addIcon] = ($(elem).is("[type='password']")) ? ["fa-eye-slash", "fa-eye"] : ["fa-eye", "fa-eye-slash"]

   $(elem).attr('type', typeInput);
   icon.removeClass(removeIcon).addClass(addIcon);
}

$(".nextItem").keypress(function (e) {
   var tecla = e.keyCode ? e.keyCode : e.which;
   if (tecla == 13) {
      e.preventDefault();
      var indexof = $(".nextItem").index(this) + 1;

      if (indexof < $(".nextItem:not(input[readonly])").length)
         $(`.nextItem:eq(${indexof})`).focus();
      else
         return null

   }
});

function formatBytes(bytes, decimals = 2) {
   const k = 1024;
   const dm = decimals < 0 ? 0 : decimals;
   const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

   const i = Math.floor(Math.log(bytes) / Math.log(k));

   return Math.round(bytes / Math.pow(k, i)).toFixed(dm).replace(".", ",") + ' ' + sizes[i];
}

let connection;
window.ononline = () => {
   // if (connection === "OFFLINE") 
   connection = "ONLINE";
};
window.onoffline = () => {
   connection = "OFFLINE";
};