"use strict";

var redis = require("../helpers/redis");

(function () {
    module.exports = {

        /**
         * @example curl -v -X GET "http://127.0.0.1:8081/redis/test"
         * @param next
         */
        getAction: function * getAction(next) {
            this.body = yield redis.get(this.params.key);
            yield next;
        },

        /**
         * @example curl -v -X POST "http://127.0.0.1:8081/redis" -d "key=test&value=hello&expire=3600"
         * @param next
         */
        postAction: function * postAction(next) {
            var result = yield redis.set(this.request.body.key, this.request.body.value, Number(this.request.body.expire));
            if (result) {
                this.status = 201;
                this.body = {
                    "message": "Created"
                }
            } else {
                this.status = 400;
                this.body = {
                    "message": "Bad Request"
                }
            }
            yield next;
        },
        putAction: function * putAction(next) {
            yield next;
        },

        /**
         * @example curl -v -X DELETE "http://127.0.0.1:8081/redis/test"
         * @param next
         */
        deleteAction: function * deleteAction(next) {
            if (yield redis.delete(this.params.key)) {
                this.status = 204;
            } else {
                this.status = 400;
                this.body = {
                    "message": "Bad Request"
                }
            }
            yield next;
        }
    }
}());