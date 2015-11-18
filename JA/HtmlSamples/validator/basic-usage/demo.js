$(function () {
$(document).ready(function () {
            var data = [{ ID: "ID101", Name: "簡単クレンジング ミルク", Code: 101 },
            { ID: "ID102", Name: "カモミール & ローズヒップ クリーム", Code: 102 },
            { ID: "ID103", Name: "ハニー & オレンジ フェイシャル スクラブ", Code: 103 },
            { ID: "ID104", Name: "ライム リップクリーム", Code: 104 },
            { ID: "ID105", Name: "アルガン フェース マスク", Code: 105 },
            { ID: "ID106", Name: "シー ハンド クリーム", Code: 106 },
            { ID: "ID107", Name: "つばき & ローズ保湿クレンジング", Code: 107 },
            { ID: "ID108", Name: "うる落ちアイメークアップ リムーバー", Code: 108 },
            { ID: "ID109", Name: "ふっくら高保湿リップ バーム", Code: 109 },
            { ID: "ID110", Name: "スーパーうるおいモイスチャライザー", Code: 110 },
            { ID: "ID111", Name: "ディープ クレンジング マスク", Code: 111 }];

            $('#combo2').igCombo({
                width: 400,
                inputName: "products",
                dataSource: data,
                allowCustomValue: true,
                textKey: 'Name',
                valueKey: "ID",
                multiSelection: {
                    enabled: true
                }
            });
            $("#rating").igRating({
                precision: "half",
                valueAsPercent: false
            });
            $("#igCheckboxEditor").igCheckboxEditor();

            $('#validationForm').igValidator({
                required: true,
                onsubmit: true,
                successMessage: "有効",
                fields: [{
                    selector: "#grpEdit1",
                    onblur: false
                },
				{
				    selector: "#grpEdit2",
				    date: true,
				    required: false,
				    onchange: true,
				    valueRange: [new Date()]
				}, {
				    selector: "#rating",
				    successMessage: "有効",
				    onchange: true,
				    valueRange: {
				        min: 1.5,
				        errorMessage: "1.5 星以上が必要 (カスタム メッセージ)"
				    },
				    notificationOptions: {
				        mode: "popover"
				    }
				},
				{
				    selector: "#combo2",
				    onchange: true,
				    lengthRange: [2]
				},
				{
				    selector: "#igCheckboxEditor",
				    onchange: true
				}
                ]
            });
        });
});