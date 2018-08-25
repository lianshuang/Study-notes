var deal_Storage = {
    /*-----------------cookie---------------------*/
    /*设置cookie*/
    setCookie(name, value, day) {
        var setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (var i in setting) {
                var oDate = new Date();
                oDate.setDate(oDate.getDate() + day);
                document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
            }
        } else {
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + day);
            document.cookie = name + '=' + value + ';expires=' + oDate;
        }

    },

    /*获取cookie*/
    getCookie(name) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
        return '';
    },

    /*删除cookie*/
    removeCookie(name) {
        this.setCookie(name, 1, -1);
    },


    /*-----------------localStorage---------------------*/
    /*设置localStorage*/
    setLocal(key, val) {
        var setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (var i in setting) {
                window.localStorage.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            window.localStorage.setItem(key, JSON.stringify(val))
        }

    },

    /*获取localStorage*/
    getLocal(key) {
        if (key) return JSON.parse(window.localStorage.getItem(key))
        return null;

    },

    /*移除localStorage*/
    removeLocal(key) {
        window.localStorage.removeItem(key)
    },

    /*移除所有localStorage*/
    clearLocal() {
        window.localStorage.clear()
    },


    /*-----------------sessionStorage---------------------*/
    /*设置sessionStorage*/
    setSession(key, val) {
        var setting = arguments[0];
        if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object') {
            for (var i in setting) {
                window.sessionStorage.setItem(i, JSON.stringify(setting[i]))
            }
        } else {
            window.sessionStorage.setItem(key, JSON.stringify(val))
        }

    },

    /*获取sessionStorage*/
    getSession(key) {
        if (key) return JSON.parse(window.sessionStorage.getItem(key))
        return null;

    },

    /*移除sessionStorage*/
    removeSession(key) {
        window.sessionStorage.removeItem(key)
    },

    /*移除所有sessionStorage*/
    clearSession() {
        window.sessionStorage.clear()
    },

}