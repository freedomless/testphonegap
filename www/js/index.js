/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        // Add to index.js or the first page that loads with your app.
        // For Intel XDK and please add this to your app.js
            console.log("... device ready ...");
            alert("device on.\n");
            var notificationOpenedCallBack = function(jsonData) {
                console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
            };            

            window.plugins.OneSignal
                .startInit('adfdf8db-3cbf-46c6-b574-9a9a60ca41d3')
                .handleNotificationReceived(function(jsonData) {
                    alert("Notification received:\n" + JSON.stringify(jsonData));
                    console.log('Did I receive a notification: ' + JSON.stringify(jsonData));
                  })
                // .handleNotificationOpened(notificationOpenedCallBack)
                .endInit();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
