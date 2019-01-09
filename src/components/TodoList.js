/* eslint-disable */

// Some default items
let items = [{
        "item": "Wake up"
    },
    {
        "item": "Learn Vue"
    },
    {
        "item": "Be awesome"
    }
];
// uses local storage to store todo list
const STORAGE_KEY = 'vue-todolist-1.0';
// an options object to call save and load functions
let storeOptions = {
    load: function () {
        // get array from local storage
        let list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        if (list.length === 0) list = items;
        return list;
    },
    save: function (list) {
        // update array in local storage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
}
export default {
    name: 'TodoList',
    // data() is where varables that the template need access to is stored
    data() {
        return {
            item: '',
            // load array from local storage on startup
            items: storeOptions.load(),
            validate: false,
            error: 'Type atleast 2 characters'
        }
    },
    // watch will look for changes, and execute function when change happens
    watch: {
        // the property to watch
        items: {
            handler: function (items) {
                // updates array at local storage on every change in the local array
                storeOptions.save(items);
            },
            deep: true
        },
        item: {
            // check input length for validation
            handler: function () {
                this.validate = this.item.length < 2 && this.item.length > 0 ? true : false;
            }
        }
    },
    // functions to manipulate the template goes into methods
    methods: {
        addItem() {
            if (!this.validate && this.item.trim()) {
                this.items.push({
                    item: this.item
                });
                this.item = '';
            } else {
                console.log('Not valid');
            }
        },
        removeItem(item) {
            // remove item from array at index recieved
            this.items.splice(item, 1);
        }
    }
}