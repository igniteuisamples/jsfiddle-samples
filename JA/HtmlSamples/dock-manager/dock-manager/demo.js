$(function () {
import { defineCustomElements } from 'https://jp.igniteui.com/igniteui/dockmanager/loader/index.mjs';
        defineCustomElements();
        window.moduleLoaded = true;
     
        $(function () {
            if (!window.moduleLoaded) {
                $("#dockManager").hide();
                $("#error").show();
                
            }
            else {
                $("#error").hide();
                document.getElementById('dockManager').layout = {
                    rootPane: {
                        type: "splitPane",
                        orientation: "horizontal",
                        panes: [
                            {
                                type: "splitPane",
                                orientation: "vertical",
                                panes: [
                                    {
                                        type: "contentPane",
                                        contentId: "content1",
                                        header: "Content Pane 1"
                                    },
                                    {
                                        type: "contentPane",
                                        contentId: "content2",
                                        header: "Unpinned Pane 1",
                                        isPinned: false
                                    }
                                ]
                            },
                            {
                                type: "splitPane",
                                orientation: "vertical",
                                size: 200,
                                panes: [
                                    {
                                        type: "documentHost",
                                        size: 200,
                                        rootPane: {
                                            type: "splitPane",
                                            orientation: "horizontal",
                                            panes: [
                                                {
                                                    type: "tabGroupPane",
                                                    panes: [
                                                        {
                                                            type: "contentPane",
                                                            header: "Document 1",
                                                            contentId: "content3"
                                                        },
                                                        {
                                                            type: "contentPane",
                                                            header: "Document 2",
                                                            contentId: "content4"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        type: "contentPane",
                                        contentId: "content5",
                                        header: "Unpinned Pane 2",
                                        isPinned: false
                                    }
                                ]
                            },
                            {
                                type: "splitPane",
                                orientation: "vertical",
                                panes: [
                                    {
                                        type: "tabGroupPane",
                                        size: 200,
                                        panes: [
                                            {
                                                type: "contentPane",
                                                contentId: "content6",
                                                header: "Tab 1"
                                            },
                                            {
                                                type: "contentPane",
                                                contentId: "content7",
                                                header: "Tab 2"
                                            }
                                        ]
                                    },
                                    {
                                        type: "contentPane",
                                        contentId: "content8",
                                        header: "Content Pane 2"
                                    }
                                ]
                            }
                        ]
                    },
                    floatingPanes: [
                        {
                            type: "splitPane",
                            orientation: "horizontal",
                            floatingHeight: 150,
                            floatingWidth: 250,
                            floatingLocation: { x: 300, y: 200 },
                            panes: [
                                {
                                    type: "contentPane",
                                    contentId: "content9",
                                    header: "Floating Pane"
                                }
                            ]
                        }
                    ]
                };
            }
        });
});