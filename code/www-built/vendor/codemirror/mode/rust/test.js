// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE


!function(){function r(r){test.mode(r,n,Array.prototype.slice.call(arguments,1))}var n=CodeMirror.getMode({indentUnit:4},"rust");r("integer_test","[number 123i32]","[number 123u32]","[number 123_u32]","[number 0xff_u8]","[number 0o70_i16]","[number 0b1111_1111_1001_0000_i32]","[number 0usize]"),r("float_test","[number 123.0f64]","[number 0.1f64]","[number 0.1f32]","[number 12E+99_f64]"),r("string-literals-test",'[string "foo"]','[string r"foo"]','[string "\\"foo\\""]','[string r#""foo""#]','[string "foo #\\"# bar"]','[string b"foo"]','[string br"foo"]','[string b"\\"foo\\""]','[string br#""foo""#]','[string br##"foo #" bar"##]',"[string-2 'h']","[string-2 b'h']")}();
//# sourceMappingURL=test.js.map