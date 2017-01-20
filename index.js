var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();
var token = "";
client.on('ready', function () {
    console.log("It's a me, Andrew! Call me by typing Italiano");
    client.user.setGame("with myself");
    JsonGetAsync("http://ripperquotes.azurewebsites.net");
    // client.channels.get("name", "reddit-free-zone");
});
var sayings = [
    "Mamma mia!",
    "Wowee, I love Anime and Pizza!",
    "Yahoo! Italy!",
    "https://barbaracartategui.files.wordpress.com/2010/11/pizza-pepperoni.jpg",
    "http://www.ezilon.com/maps/images/europe/Italian-road-map.gif",
    "Videogames my man!",
    "Weed my dude!",
    "You found Dark Souls hard? Well gee get good",
    "Metal music and Vaporwave, that's the stuff",
    "http://4chan.org/ck is where it's at",
    ":pizza:",
    "My Dad's dead",
    "No shazz I wasn't bonging on",
    "I didn't think I was this quotable",
    "Drake's probably the whitest black guy out there"
];
var ThoughtsRead = function () {
    var thoughtString = fs.readFileSync("thoughts.json");
    var thoughts = thoughtString == undefined ? [] : JSON.parse(thoughtString);
    return thoughts;
};
var ThoughtsSave = function (thoughts) {
    fs.writeFileSync("thoughts.json", JSON.stringify(thoughts));
};
client.on('message', function (message) {
    if (message.content.startsWith("Italiano")) {
        if (message.content.search(" remember ") != -1) {
            var thought = message.content.split(" remember ")[1];
            if (thought != "") {
                var thoughts = ThoughtsRead();
                thoughts.push(thought);
                console.log(thoughts);
                ThoughtsSave(thoughts);
                message.reply("I shall remember " + thought + " for you");
            }
            else
                message.reply("What do I need to remember?");
        }
        else if (message.content.search("what do you know") != -1) {
            var thoughts = ThoughtsRead();
            if (thoughts.length > 0) {
                var index = Math.floor(Math.random() * (thoughts.length));
                var thought = thoughts[index];
                message.reply("Well someone told me " + thought);
            }
            else
                message.reply("I don't know anything, tell me to remember something");
        }
        else {
            var index = Math.floor(Math.random() * (sayings.length));
            var response = sayings[index];
            message.reply(response);
        }
    }
});
function JsonGetAsync(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        var request = new XMLHttpRequest();
                        request.open("GET", APIUri + url, true);
                        request.onload = function () {
                            resolve(request.responseText);
                        };
                        request.send();
                    })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
/**
 * Asynchronous function for posting data to the api, the URL is appended to the the main uri
 */
function JsonPostAsync(url, data) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        var request = new XMLHttpRequest();
                        request.withCredentials = true;
                        request.open("POST", APIUri + url);
                        request.setRequestHeader("content-type", "application/json");
                        request.setRequestHeader("cache-control", "no-cache");
                        request.onload = function () { return resolve(request.status + ":" + request.responseText); };
                        request.send(JSON.stringify(data));
                    })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res];
            }
        });
    });
}
// Check for token.txt
if (token == "") {
    fs.readFile("token.txt", "utf-8", function (err, data) {
        token = data;
        client.login(token);
    });
}
else
    client.login(token);
