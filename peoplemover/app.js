/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'PeopleMover',

  // make sure the MessageBox class gets loaded
     requires: ['Ext.MessageBox'],

    startupImage: {
     '320x460': 'resources/startup/320x460.jpg',
     '640x920': 'resources/startup/640x920.png',
     '640x1096': 'resources/startup/640x1096.png',
     '768x1004': 'resources/startup/768x1004.png',
     '748x1024': 'resources/startup/748x1024.png',
     '1536x2008': 'resources/startup/1536x2008.png',
     '1496x2048': 'resources/startup/1496x2048.png'
    },

    icon: {
     57: 'resources/icons/Icon.png',
     72: 'resources/icons/Icon~ipad.png',
     114: 'resources/icons/Icon@2x.png',
     144: 'resources/icons/Icon~ipad@2x.png'
   },


    launch: function() {
// Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingImage').destroy();
      Ext.fly('appLoadingIndicator').destroy();
    
        
    	 Ext.create('Ext.data.TreeStore', {
            storeId: 'TreeStore',
            fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                name: 'leaf',
                defaultValue: true
            }],
            root: {
                leaf: false
            },
            proxy: {
                type: 'jsonp',
                url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                reader: {
                    type: 'json',
                    rootProperty: 'responseData.feed.entries'
                }
            }
        });        
	
        Ext.create("Ext.tab.Panel", {
            fullscreen: true,
            tabBarPosition: 'bottom',

            items: [
               {
                    xtype: 'nestedlist',
                    title: 'Pepe',
                    iconCls: 'home',
                    displayField: 'title',

                    store: 'TreeStore',

                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                            this.getDetailCard().setHtml(post.get('content'));
                        }
                    }
                },
                // this is the new item
                {
                    title: 'Contact',
                    iconCls: 'user',
                    xtype: 'formpanel',
                    url: 'contact.php',
                    layout: 'vbox',

                    items: [
                        {
                            xtype: 'fieldset',
                            title: 'Contact Us',
                            instructions: '(email address is optional)',
                            height: 285,
                            items: [
                                {
                                    xtype: 'textfield',
                                    label: 'Name'
                                },
                                {
                                    xtype: 'emailfield',
                                    label: 'Email'
                                },
                                {
                                    xtype: 'textareafield',
                                    label: 'Message'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            text: 'Send',
                            ui: 'confirm',
                            handler: function() {
                                this.up('formpanel').submit();
                            }
                        }
                    ]
                }
            ]
        });    
    }
});
