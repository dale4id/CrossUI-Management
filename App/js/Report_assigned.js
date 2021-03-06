// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support async functions
xui.Class('App.Report_assigned', 'xui.Module',{
    Instance:{
        // Dependencies css
        Dependencies: [],
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
                .setValue("7 Jan 2021")
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
                .setDock("fill")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("5.333333333333333em")
                .setTop("19.047619047619047em")
                .setWidth("18em")
                .setHeight("28.876190476190477em")
                .setCaption("Group")
                .setToggleBtn(false)
            );
            
            host.xui_ui_group1.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div61")
                .setDock("top")
                .setDockMargin({
                    "left":10,
                    "top":0,
                    "right":10,
                    "bottom":0
                })
                .setLeft("8.380952380952381em")
                .setTop("1.5238095238095237em")
                .setHeight("6.628571428571429em")
            );
            
            host.xui_ui_div61.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div62")
                .setDock("left")
                .setLeft("3.8095238095238093em")
                .setTop("2.2857142857142856em")
                .setWidth("17.066666666666666em")
            );
            
            host.xui_ui_div62.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput50")
                .setDirtyMark(false)
                .setDock("top")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("3.0476190476190474em")
                .setTop("2.2857142857142856em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Assign To")
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
                .setValue("Fina")
            );
            
            host.xui_ui_div62.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setDirtyMark(false)
                .setDock("bottom")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("4.571428571428571em")
                .setTop("4.571428571428571em")
                .setCaption("Assign")
            );
            
            host.xui_ui_div61.append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_div63")
                .setDock("fill")
                .setLeft("18.285714285714285em")
                .setTop("3.0476190476190474em")
                .setWidth("37.56190476190476em")
            );
            
            host.xui_ui_div63.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input16")
                .setDirtyMark(false)
                .setDock("fill")
                .setDockMargin({
                    "left":5,
                    "top":0,
                    "right":5,
                    "bottom":0
                })
                .setLeft("14.476190476190476em")
                .setTop("3.8095238095238093em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Description")
                .setLabelHAlign("left")
                .setMultiLines(true)
                .setValue("Error sudah selesai di perbaiki, mohon di cek kembali")
            );
            
            host.xui_ui_group1.append(
                xui.create("xui.UI.TreeGrid")
                .setHost(host,"xui_ui_treegrid8")
                .setDirtyMark(false)
                .setDockMargin({
                    "left":10,
                    "top":10,
                    "right":10,
                    "bottom":10
                })
                .setLeft("0em")
                .setTop("0em")
                .setEditable(true)
                .setRowHandler(false)
                .setHeader([
                    {
                        "id":"1",
                        "caption":"Assign By",
                        "type":"label",
                        "width":"8em"
                    },
                    {
                        "id":"2",
                        "caption":"Assign Date",
                        "type":"label",
                        "width":"9.980952380952381em",
                        "colResizer":true
                    },
                    {
                        "id":"3",
                        "caption":"Desc",
                        "type":"label",
                        "width":"40em",
                        "colResizer":true
                    },
                    {
                        "id":"4",
                        "caption":"Accept by",
                        "type":"label",
                        "width":"8em",
                        "colResizer":true
                    },
                    {
                        "id":"5",
                        "caption":"Accept Date",
                        "type":"label",
                        "width":"9.980952380952381em",
                        "colResizer":true
                    },
                    {
                        "id":"6",
                        "caption":"Start Time",
                        "type":"label",
                        "width":"9.980952380952381em",
                        "colResizer":true
                    },
                    {
                        "id":"7",
                        "caption":"End TIme",
                        "type":"label",
                        "width":"9.980952380952381em",
                        "colResizer":true
                    }
                ])
                .setRows([
                    {
                        "id":"1",
                        "cells":[
                            {
                                "value":"PM"
                            },
                            {
                                "value":"30 Desc 2020 14:32"
                            },
                            {
                                "value":""
                            },
                            {
                                "value":"Mira"
                            },
                            {
                                "value":"1 Jan 2021 08:00"
                            },
                            {
                                "value":"1 Jan 2021 08:00"
                            },
                            {
                                "value":"3 Jan 2021 12:00"
                            }
                        ]
                    },
                    {
                        "id":"2",
                        "cells":[
                            {
                                "value":"Mira"
                            },
                            {
                                "value":"3 Jan 2021 12:10"
                            },
                            {
                                "value":"FSD sudah ada di server, pada bagian save ada koneksi ke penjualan"
                            },
                            {
                                "value":"Mei"
                            },
                            {
                                "value":"3 Jan 2021 12:43"
                            },
                            {
                                "value":"3 Jan 2021 13:17"
                            },
                            {
                                "value":"3 Jan 2021 18:23"
                            }
                        ]
                    },
                    {
                        "id":"3",
                        "cells":[
                            {
                                "value":"Mei"
                            },
                            {
                                "value":"3 Jan 2021 18:37"
                            },
                            {
                                "value":""
                            },
                            {
                                "value":"Agus"
                            },
                            {
                                "value":"4 Jan 2021 08:07"
                            },
                            {
                                "value":"4 Jan 2021 08:08"
                            },
                            {
                                "value":"4 Jan 2021 10:17"
                            }
                        ]
                    },
                    {
                        "id":"4",
                        "cells":[
                            {
                                "value":"Agus"
                            },
                            {
                                "value":"4 Jan 2021 10:17"
                            },
                            {
                                "value":"Untuk tabel user tidak ada groupin nya"
                            },
                            {
                                "value":"Mira"
                            },
                            {
                                "value":"4 Jan 2021 15:23"
                            },
                            {
                                "value":"5 Jan 2021 08:03"
                            },
                            {
                                "value":"5 Jan 2021 11:17"
                            }
                        ]
                    },
                    {
                        "id":"5",
                        "cells":[
                            {
                                "value":"Mira"
                            },
                            {
                                "value":"5 Jan 2021 11:17"
                            },
                            {
                                "value":"Table sudah di update"
                            },
                            {
                                "value":"Agus"
                            },
                            {
                                "value":"5 Jan 2021 11:20"
                            },
                            {
                                "value":"5 Jan 2021 11:21"
                            },
                            {
                                "value":"7 Jan 2021 12:05"
                            }
                        ]
                    },
                    {
                        "id":"6",
                        "cells":[
                            {
                                "value":"Agus"
                            },
                            {
                                "value":"7 Jan 2021 12:05"
                            },
                            {
                                "value":""
                            },
                            {
                                "value":"Fina"
                            },
                            {
                                "value":"7 Jan 2021 13:09"
                            },
                            {
                                "value":"7 Jan 2021 13:10"
                            },
                            {
                                "value":"7 Jan 2021 14:02"
                            }
                        ]
                    },
                    {
                        "id":"7",
                        "cells":[
                            {
                                "value":"Fina"
                            },
                            {
                                "value":"7 Jan 2021 14:02"
                            },
                            {
                                "value":"Ada error pada tombol perhitungan diskon"
                            },
                            {
                                "value":"Agus"
                            },
                            {
                                "value":"7 Jan 2021 14:05"
                            },
                            {
                                "value":"7 Jan 2021 14:06"
                            },
                            {
                                "value":"7 Jan 2021 15:13"
                            }
                        ]
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});