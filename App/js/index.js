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
                .setLabelCaption("Module Name")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_div31.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div33")
                .setDock("left")
                .setLeft("17.523809523809526em")
                .setTop("3.0476190476190474em")
            );
            
            host.xui_ui_div33.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput132")
                .setDirtyMark(false)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("3.0476190476190474em")
                .setTop("1.5238095238095237em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Status")
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
            
            host.xui_ui_div31.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div77")
                .setDock("left")
                .setLeft("26.666666666666668em")
                .setTop("3.0476190476190474em")
                .setWidth("11.504761904761905em")
            );
            
            host.xui_ui_div77.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput147")
                .setDirtyMark(false)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("3.8095238095238093em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Tanggal Mulai")
                .setLabelHAlign("left")
                .setType("date")
            );
            
            host.xui_ui_div31.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div83")
                .setDock("left")
                .setLeft("26.666666666666668em")
                .setTop("3.0476190476190474em")
                .setWidth("11.504761904761905em")
            );
            
            host.xui_ui_div83.append(
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
                .setLeft("3.8095238095238093em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Tanggal Selesai")
                .setLabelHAlign("left")
                .setType("date")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div34")
                .setDock("top")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("11.428571428571429em")
                .setTop("17.523809523809526em")
                .setHeight("12.952380952380953em")
            );
            
            host.xui_ui_div34.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div60")
                .setDock("left")
                .setLeft("8.380952380952381em")
                .setTop("4.571428571428571em")
                .setWidth("41.98095238095238em")
            );
            
            host.xui_ui_div60.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input18")
                .setDirtyMark(false)
                .setDock("fill")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("7.619047619047619em")
                .setTop("6.857142857142857em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Keterangan")
                .setLabelHAlign("left")
                .setMultiLines(true)
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div78")
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
            
            host.xui_ui_div78.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div79")
                .setDock("left")
                .setLeft("26.666666666666668em")
                .setTop("3.0476190476190474em")
                .setWidth("29.333333333333332em")
            );
            
            host.xui_ui_div79.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput182")
                .setDirtyMark(false)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("5.333333333333333em")
                .setTop("1.5238095238095237em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Project Module")
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
            
            host.xui_ui_div78.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div85")
                .setDock("left")
                .setLeft("26.666666666666668em")
                .setTop("3.0476190476190474em")
                .setWidth("11.504761904761905em")
            );
            
            host.xui_ui_div85.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput149")
                .setDirtyMark(false)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("3.8095238095238093em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Tanggal Deadline")
                .setLabelHAlign("left")
                .setType("date")
            );
            
            host.xui_ui_div78.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div210")
                .setDock("left")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("43.42857142857143em")
                .setTop("1.5238095238095237em")
                .setWidth("8.152380952380952em")
            );
            
            host.xui_ui_div210.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input43")
                .setDirtyMark(false)
                .setDock("top")
                .setLeft("3.8095238095238093em")
                .setTop("1.5238095238095237em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Target Jam")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_div19.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div80")
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
            
            host.xui_ui_div80.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div234")
                .setDock("left")
                .setLeft("6.095238095238095em")
                .setTop("3.0476190476190474em")
                .setWidth("17.295238095238094em")
            );
            
            host.xui_ui_div234.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input49")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("5.333333333333333em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Current User")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_div80.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div235")
                .setDock("left")
                .setLeft("15.238095238095237em")
                .setTop("1.5238095238095237em")
                .setWidth("12.19047619047619em")
            );
            
            host.xui_ui_div235.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input50")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("5.333333333333333em")
                .setTop("1.5238095238095237em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Last Access")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_div80.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div236")
                .setDock("left")
                .setLeft("29.714285714285715em")
                .setTop("1.5238095238095237em")
            );
            
            host.xui_ui_div236.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input51")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("6.095238095238095em")
                .setTop("1.5238095238095237em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Working Days")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_div80.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div237")
                .setDock("left")
                .setLeft("35.04761904761905em")
                .setTop("0em")
            );
            
            host.xui_ui_div237.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input52")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("5.333333333333333em")
                .setTop("0.7619047619047619em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Working Hour")
                .setLabelHAlign("left")
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
                .setHeight("4.495238095238095em")
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