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
                .setCaption("Module Info")
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
                .setLabelCaption("Project")
                .setLabelHAlign("left")
                .setValue("Financial Distribution Company")
            );
            
            host.xui_ui_div31.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div45")
                .setDock("left")
                .setLeft("27.428571428571427em")
                .setTop("0.7619047619047619em")
                .setWidth("18.20952380952381em")
            );
            
            host.xui_ui_div45.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setLeft("12.19047619047619em")
                .setTop("1.5238095238095237em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Module")
                .setLabelHAlign("left")
                .setValue("Pembelian")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div248")
                .setDock("fill")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("18.285714285714285em")
                .setTop("19.047619047619047em")
            );
            
            host.xui_ui_div248.append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group1")
                .setDock("top")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("5.333333333333333em")
                .setTop("19.047619047619047em")
                .setWidth("18em")
                .setHeight("13.638095238095238em")
                .setCaption("Group")
                .setToggleBtn(false)
            );
            
            host.xui_ui_group1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div249")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("11.428571428571429em")
                .setHeight("4.647619047619048em")
            );
            
            host.xui_ui_div249.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div252")
                .setDock("left")
                .setLeft("12.952380952380953em")
                .setTop("1.5238095238095237em")
                .setWidth("17.904761904761905em")
            );
            
            host.xui_ui_div252.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input96")
                .setDirtyMark(false)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("8.380952380952381em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Top Label")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_div249.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div253")
                .setDock("left")
                .setLeft("33.523809523809526em")
                .setTop("2.2857142857142856em")
                .setWidth("20.571428571428573em")
            );
            
            host.xui_ui_div253.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput148")
                .setDirtyMark(false)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("5.333333333333333em")
                .setTop("3.0476190476190474em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Top Label")
                .setLabelHAlign("left")
                .setItems([
                    {
                        "id":"a",
                        "caption":"item 1",
                        "imageClass":"xui-icon-number1"
                    },
                    {
                        "id":"b",
                        "caption":"item 2",
                        "imageClass":"xui-icon-number2"
                    },
                    {
                        "id":"c",
                        "caption":"item 3",
                        "imageClass":"xui-icon-number3"
                    },
                    {
                        "id":"d",
                        "caption":"item 4",
                        "imageClass":"xui-icon-number4",
                        "disabled":true
                    }
                ])
            );
            
            host.xui_ui_group1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div254")
                .setDock("top")
                .setLeft("16.761904761904763em")
                .setTop("11.428571428571429em")
                .setHeight("6.933333333333334em")
            );
            
            host.xui_ui_div254.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div266")
                .setDock("left")
                .setLeft("8.380952380952381em")
                .setTop("0em")
                .setWidth("48.38095238095238em")
            );
            
            host.xui_ui_div266.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input102")
                .setDirtyMark(false)
                .setDock("fill")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("9.904761904761905em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Top Label")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            host.xui_ui_div248.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid34")
                .setDirtyMark(false)
                .setDockMargin({
                    "left":5,
                    "top":10,
                    "right":5,
                    "bottom":10
                })
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"1",
                        "caption":"Status",
                        "type":"checkbox",
                        "width":"8em"
                    },
                    {
                        "id":"2",
                        "caption":"Name",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"3",
                        "caption":"Description",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"4",
                        "caption":"Tags",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"5",
                        "caption":"Finish By",
                        "type":"label",
                        "width":"8em"
                    }
                ])
                .setRows([
                    {
                        "cells":[
                            {
                                "value":true
                            },
                            {
                                "value":"input1"
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":"2021-01-19 08:01:39"
                            },
                            {
                                "value":"00:00"
                            },
                            {
                                "value":"2021-01-19 08:01:39"
                            },
                            {
                                "value":"#FFFFFF"
                            },
                            {
                                "value":12
                            },
                            {
                                "value":12
                            },
                            {
                                "value":23.44
                            },
                            {
                                "value":43.23
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":true
                            },
                            {
                                "value":"input2"
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":"2021-01-19 08:01:39"
                            },
                            {
                                "value":"02:00"
                            },
                            {
                                "value":"2021-01-19 08:01:39"
                            },
                            {
                                "value":"#F0F0F0"
                            },
                            {
                                "value":0.13
                            },
                            {
                                "value":0.13
                            },
                            {
                                "value":123
                            },
                            {
                                "value":56.32
                            }
                        ]
                    },
                    {
                        "cells":[
                            {
                                "value":true
                            },
                            {
                                "value":"input3"
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":""
                            },
                            {
                                "value":"2021-01-19 08:01:39"
                            },
                            {
                                "value":"03:00"
                            },
                            {
                                "value":"2021-01-19 08:01:39"
                            },
                            {
                                "value":"#0F0F0F"
                            },
                            {
                                "value":0.14
                            },
                            {
                                "value":0.14
                            },
                            {
                                "value":233.55
                            },
                            {
                                "value":43.53
                            }
                        ]
                    }
                ])
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div250")
                .setDock("bottom")
                .setDockMargin({
                    "left":10,
                    "top":10,
                    "right":10,
                    "bottom":10
                })
                .setLeft("16.761904761904763em")
                .setTop("25.142857142857142em")
                .setHeight("2.5142857142857142em")
            );
            
            host.xui_ui_div250.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div251")
                .setDock("right")
                .setLeft("16.761904761904763em")
                .setTop("2.2857142857142856em")
            );
            
            host.xui_ui_div251.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button55")
                .setDirtyMark(false)
                .setDock("bottom")
                .setLeft("6.095238095238095em")
                .setTop("5.333333333333333em")
                .setCaption("Save")
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