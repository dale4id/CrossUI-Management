// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setLeft("9.904761904761905em")
                .setTop("25.142857142857142em")
                .setCaption("Module")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div19")
                .setDock("fill")
                .setLeft("1.5238095238095237em")
                .setTop("2.2857142857142856em")
                .setWidth("35.12380952380953em")
                .setHeight("20.64761904761905em")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div20")
                .setDock("top")
                .setHeight("1.1428571428571428em")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div31")
                .setDock("top")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("11.428571428571429em")
                .setTop("17.523809523809526em")
                .setHeight("4.495238095238095em")
            );
            
            host.xui_ui_div31.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div32")
                .setDock("left")
                .setLeft("5.333333333333333em")
                .setTop("6.857142857142857em")
                .setWidth("20.19047619047619em")
            );
            
            host.xui_ui_div32.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("0.7619047619047619em")
                .setTop("5.333333333333333em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("User")
                .setLabelHAlign("left")
                .setValue("Agus")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div81")
                .setDock("top")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("11.428571428571429em")
                .setTop("17.523809523809526em")
                .setHeight("13.028571428571428em")
            );
            
            host.xui_ui_div81.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div349")
                .setDock("top")
                .setLeft("13.714285714285714em")
                .setTop("6.095238095238095em")
                .setHeight("1.6em")
            );
            
            host.xui_ui_div349.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setDock("fill")
                .setLeft("3.8095238095238093em")
                .setTop("1.5238095238095237em")
                .setCaption("Module")
                .setHAlign("left")
                .setFontWeight("bold")
            );
            
            host.xui_ui_div81.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid23")
                .setDirtyMark(false)
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"1",
                        "caption":"Project",
                        "type":"label",
                        "width":"20.038095238095238em"
                    },
                    {
                        "id":"2",
                        "caption":"Module",
                        "type":"label",
                        "width":"17.98095238095238em"
                    },
                    {
                        "id":"3",
                        "caption":"Date Assign",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"4",
                        "caption":"Current User",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"5",
                        "caption":"Status",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"6",
                        "caption":"Progress",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"7",
                        "caption":"Response",
                        "type":"button",
                        "width":"8em"
                    },
                    {
                        "id":"8",
                        "caption":"Task",
                        "type":"button",
                        "width":"8em"
                    }
                ])
                .setRows([
                    {
                        "cells":[
                            {
                                "value":"Financial Distribution Company"
                            },
                            {
                                "value":"Pembelian"
                            },
                            {
                                "value":"13 Jan 2021"
                            },
                            {
                                "value":"Mira"
                            },
                            {
                                "value":"Error"
                            },
                            {
                                "value":"14/23"
                            },
                            {
                                "value":"Comment"
                            },
                            {
                                "value":"Create"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"Financial Distribution Company"
                            },
                            {
                                "value":"Penjualan"
                            },
                            {
                                "value":"14 Jan 2021"
                            },
                            {
                                "value":"Agus"
                            },
                            {
                                "value":"Develop"
                            },
                            {
                                "value":"23/24"
                            },
                            {
                                "value":"Assign"
                            },
                            {
                                "value":"Create"
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":"Bank Note Assigment"
                            },
                            {
                                "value":"Form Allocation"
                            },
                            {
                                "value":"12 Jan 2021"
                            },
                            {
                                "value":"Fina"
                            },
                            {
                                "value":"Checking"
                            },
                            {
                                "value":"12/34"
                            },
                            {
                                "value":"Comment"
                            },
                            {
                                "value":"Create"
                            }
                        ]
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});