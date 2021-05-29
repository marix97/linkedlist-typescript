"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    //Initialize an empty linked list upon creation
    function LinkedList() {
        this._head = null;
        this._count = 0;
    }
    Object.defineProperty(LinkedList.prototype, "head", {
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    //Pushes in the front
    LinkedList.prototype.push = function (value) {
        this._count++;
        var node = new node_1.Node(value);
        node.next = this._head;
        this._head = node;
    };
    //Pops the item in the front
    LinkedList.prototype.pop = function () {
        if (!this._head) {
            return undefined;
        }
        this._count--;
        var val = this._head.val;
        this._head = this._head.next;
        return val;
    };
    //Push at the end of the linked list
    LinkedList.prototype.pushBack = function (value) {
        var newNode = new node_1.Node(value);
        this._count++;
        if (!this._head) {
            this._head = newNode;
            return this;
        }
        var curr = this._head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    };
    //Pops the item at the end of the linked list
    LinkedList.prototype.popBack = function () {
        if (!this._head) {
            return undefined;
        }
        if (this._count === 1) {
            var val_1 = this._head.val;
            this._head = null;
            this._count--;
            return val_1;
        }
        var curr = this._head;
        while (curr.next.next) {
            curr = curr.next;
        }
        var val = curr.next.val;
        curr.next = null;
        this._count--;
        return val;
    };
    LinkedList.prototype.insert = function (value, index) {
        if (index < 0 || index > this._count)
            return false;
        if (index === 0) {
            this.push(value);
            return true;
        }
        else if (index === this._count) {
            this.pushBack(value);
            return true;
        }
        else {
            var currentNode = this._head;
            for (var i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }
            var newNode = new node_1.Node(value, null);
            var tempNode = currentNode.next;
            currentNode.next = newNode;
            newNode.next = tempNode;
            this._count++;
            return true;
        }
    };
    LinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this._count)
            return null;
        if (index === 0)
            return this.pop();
        else if (index === this._count - 1)
            return this.popBack();
        else {
            var preViousNode = null;
            var currentNode = this.head;
            for (var i = 0; i < index; i++) {
                preViousNode = currentNode;
                currentNode = currentNode.next;
            }
            var data = currentNode.val;
            preViousNode.next = currentNode.next;
            this._count--;
            return data;
        }
    };
    LinkedList.prototype.reverse = function () {
        var curr = this._head;
        var prev = null;
        var next = null;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this._head = prev;
        return this;
    };
    LinkedList.prototype.print = function () {
        var arr = [];
        var curr = this._head;
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr.join(' -> ');
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
