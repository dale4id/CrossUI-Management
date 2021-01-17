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
                .setCaption("Project")
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
            );
            
            host.xui_ui_div32.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input9")
                .setDirtyMark(false)
                .setDock("top")
                .setLeft("0.7619047619047619em")
                .setTop("5.333333333333333em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Top Label")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_div31.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div33")
                .setDock("left")
                .setLeft("17.523809523809526em")
                .setTop("3.0476190476190474em")
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
                .setHeight("16.761904761904763em")
            );
            
            host.xui_ui_div34.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div60")
                .setDock("left")
                .setLeft("8.380952380952381em")
                .setTop("4.571428571428571em")
                .setWidth("25.523809523809526em")
            );
            
            host.xui_ui_div60.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div61")
                .setDock("top")
                .setLeft("8.380952380952381em")
                .setTop("6.095238095238095em")
                .setHeight("3.8857142857142857em")
            );
            
            host.xui_ui_div61.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label2")
                .setDock("fill")
                .setLeft("6.857142857142857em")
                .setTop("1.5238095238095237em")
                .setCaption("Label")
            );
            
            host.xui_ui_div60.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input14")
                .setDirtyMark(false)
                .setDock("fill")
                .setLeft("5.333333333333333em")
                .setTop("12.19047619047619em")
                .setWidth("18em")
                .setHeight("10em")
                .setLabelSize("8em")
                .setLabelPos("top")
                .setLabelCaption("Text Area")
                .setLabelHAlign("center")
                .setHAlign("center")
                .setMultiLines(true)
                .setValue("asdasd")
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