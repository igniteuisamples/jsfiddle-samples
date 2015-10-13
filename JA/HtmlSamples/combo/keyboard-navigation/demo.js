$(function () {
            var tipIndex = 0;

            $("#combo").igCombo({
                width: "270px",
                textKey: "MountainName",
                valueKey: "ID",
                dataSource: mountainTops,
                multiSelection: {
                    enabled: true
                },
                dropDownOpened: function (evt, ui) {
                    if ((evt.keyCode == 40) && (tipIndex == 1)) {
                        showWellDoneMessage();
                    }
                },
                dropDownClosed: function (evt, ui) {
                    if ((evt.keyCode == 38) && (tipIndex == 4)) {
                        showWellDoneMessage();
                    }

                    //Close the drop down when there are selected items
                    if (evt.keyCode == 27 && tipIndex == 7 && $("#combo").igCombo("selectedItems")) {
                        showWellDoneMessage();
                    }
                },
                selectionChanged: function (evt, ui) {
                    if (evt.keyCode == 16 && (tipIndex == 6)) {
                        showWellDoneMessage();
                    }
                }
            });

            $("#tooltip").tooltip({
                position: { of: ".ui-igcombo-buttonicon", my: "left+55 center", at: "right center" },
                open: function (event, ui) {
                    $("#tooltip").tooltip("option", "content", getTip(tipIndex++));
                },
                tooltipClass: "tooltipStyle"
            });

            setTimeout(function () {
                startExample();
            }, 1500);


            $(document).keydown(function (e) {
                if (e.keyCode == 36 && e.ctrlKey && tipIndex == 3) {
                    var ddOpened = $("#combo").igCombo("dropDownOpened");

                    if (ddOpened) {
                        showWellDoneMessage();
                    } else {
                        showMessage("ドロップダウンを開いてください。");
                    }
                }

                if (e.keyCode == 35 && e.ctrlKey && tipIndex == 2) {
                    var ddOpened = $("#combo").igCombo("dropDownOpened");

                    if (ddOpened) {
                        showWellDoneMessage();
                    } else {
                        showMessage("ドロップダウンを開いてください。");
                    }
                }

                //Clear the input when Esc is pressed
                if (e.keyCode == 27 && tipIndex == 5) {
                    showWellDoneMessage();
                }
            });

            function startExample() {
                $("#combo").igCombo("clearInput");
                $("#combo").igCombo("closeDropDown");
                $('#tooltip').tooltip('open');
                $(".ui-igcombo-field").focus();
            }

            function showMessage(message) {
                var currentContent = $("#tooltip").tooltip("option", "content");
                $("#tooltip").tooltip("option", "content", currentContent + "<br /><b>" + message + "</b>");

                setTimeout(function () {
                    $("#tooltip").tooltip("option", "content", currentContent);
                }, 2000);
            }

            function showWellDoneMessage() {
                var content = $("#tooltip").tooltip("option", "content");
                $("div[role='tooltip']").switchClass("normal", "glowing-border", 1000);
                $("#tooltip").tooltip("option", "content", content + " <span style='display: inline-block' class='ui-icon ui-icon-check'></span>");

                setTimeout(function () {
                    $("#tooltip").tooltip("close");

                    setTimeout(function () {
                        if (tipIndex == 7) $("#tooltip").tooltip("close");
                        else {
                            $("#tooltip").tooltip("open");
                            $("#tooltip").tooltip("option", "position", { of: ".ui-igcombo-buttonicon", my: "left+55 center", at: "right center" });
                        }
                    }, 500);
                }, 1500);
            }

            function getTip(idx) {
                var tips = [
	"ドロップダウンが閉じたときに<b>下矢印</b>を押すとドロップダウンが開きます。開いたら次の項目に移動します。",
	"ドロップダウンが開いているときに <b>Ctrl</b> + <b>End</b> キーを押すと最後の項目に移動します。",
	"ドロップダウンが開いているときに <b>Ctrl</b> + <b>Home</b> キーを押すと最初の項目に移動します。",
	"ドロップダウンが開いているときに<b>上矢印</b>を押すとドロップダウンは閉じます。または以前の項目に移動します。",
	"選択されている項目がない場合に「テキスト」などの値を入力し、<b>Esc キー</b>を押すとコンテンツがクリアされます。",
	"<b>Shift</b> + <b>上/下矢印</b> キーを押すと、アクティブ (強調表示) 項目が変更されます。アクティブ項目を選択するには <b>Shift</b> キーを離します。",
    "項目が選択されているときにドロップダウンを閉じるには、<b>Esc キー</b>を押します。",
                ];

                return tips[idx];
            }

        });