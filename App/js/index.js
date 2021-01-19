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
                .setHost(host,"xui_ui_div46")
                .setDock("top")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("14.476190476190476em")
                .setTop("13.714285714285714em")
                .setHeight("4.647619047619048em")
            );
            
            host.xui_ui_div46.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div47")
                .setDock("left")
                .setLeft("9.904761904761905em")
                .setTop("3.0476190476190474em")
            );
            
            host.xui_ui_div47.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
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
                .setLabelCaption("Date Assign")
                .setLabelHAlign("left")
                .setValue("14 Jan 2021")
            );
            
            host.xui_ui_div46.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div48")
                .setDock("left")
                .setLeft("33.523809523809526em")
                .setTop("2.2857142857142856em")
            );
            
            host.xui_ui_div48.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input5")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("2.2857142857142856em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Current User")
                .setLabelHAlign("left")
                .setValue("Agus")
            );
            
            host.xui_ui_div46.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div49")
                .setDock("left")
                .setLeft("27.428571428571427em")
                .setTop("3.0476190476190474em")
            );
            
            host.xui_ui_div49.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("3.8095238095238093em")
                .setTop("0.7619047619047619em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Status")
                .setLabelHAlign("left")
                .setValue("Develop")
            );
            
            host.xui_ui_div46.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div50")
                .setDock("left")
                .setLeft("37.333333333333336em")
                .setTop("3.0476190476190474em")
            );
            
            host.xui_ui_div50.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setDirtyMark(false)
                .setDisabled(true)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("3.8095238095238093em")
                .setTop("1.5238095238095237em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Progress")
                .setLabelHAlign("left")
                .setValue("23/24")
            );
            
            host.xui_ui_div19.append(
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
                .setCaption("Group")
                .setToggleBtn(false)
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