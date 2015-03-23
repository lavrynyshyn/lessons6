var Memcached = require("memcached"),
    config = require("config"),
    memcached = new Memcached(config.memcached.location),
    Q = require("q");

/**
 * yield memcached.get("asd");
 *
 * yield memcached.set("asd", "qweqw", 3600);
 *
 * yield memcached.delete("asd");
 *
 * @type {{get: Function, set: Function, delete: Function}}
 */
module.exports = {

    /**
     * Достает из мемкеша значение по указанному ключу
     * @param {string} key название ключа
     * @returns {promise}
     */
    get: function (key) {
        var deferred = Q.defer();

        memcached.get(key, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },

    /**
     * Устанавливает ключ с указанным значением и временем жизни в мемкеш
     * @param {string} key название ключа
     * @param {string|number} value значение
     * @param {number} ttl время жизни в секундах
     * @returns {promise}
     */
    set: function (key, value, ttl) {
        var deferred = Q.defer();

        memcached.set(key, value, ttl, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    },

    /**
     * Удаляет ключ из мемкеша
     * @param {string} key название ключа
     * @returns {promise}
     */
    delete: function (key) {
        var deferred = Q.defer();

        memcached.del(key, function (err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        });

        return deferred.promise;
    }
};

