$(function () {
$(document).ready(function () {

            $('#firstName').igMaskEditor({
                inputMask: ">L<?????????????"
            });

            $('#middleName').igMaskEditor({
                width: '50px',
                inputMask: ">L"
            });

            $('#lastName').igMaskEditor({
                inputMask: ">L>CCCCCCCCCCC"
            });

            $('#state').igMaskEditor({
                width: '50px',
                inputMask: ">LL"
            });

            $('#zipcode').igMaskEditor({
                width: '80px',
                inputMask: "00099"
            });

            $('#phone').igMaskEditor({
                inputMask: "(000) 000-0000"
            });
        });
});