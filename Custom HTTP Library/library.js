//actual library

function easyHTTP () {
    this.http = new XMLHttpRequest();
}

//MAKE A HTTP GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('GET', url , true);

    const self = this;
    self.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.responseText);
        }
    }

    this.http.send();
}