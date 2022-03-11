// metadata
export const version = "0.8.10"
export const title = "Basit Veri Tipleri"
export const description = "Primitive data types"

const html = `<p>Burada sizi Solidity'de bulunan bazı basit veri türleriyle tanıştırıyoruz.</p>
<ul>
<li><code>boolean</code></li>
<li><code>uint</code></li>
<li><code>int</code></li>
<li><code>address</code></li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Primitives</span> </span>{
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> boo <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;

    <span class="hljs-comment">/*
    uint işaretsiz tamsayı anlamına gelir, yani negatif olmayan tamsayılar için
    farklı boyutlar mevcuttur
        uint8  0 to 2 ** 8 - 1 arasında değer alabilir
        uint16 0 to 2 ** 16 - 1 arasında değer alabilir
        ...
        uint256 0 to 2 ** 256 - 1 arasında değer alabilir
    */</span>
    <span class="hljs-keyword">uint8</span> <span class="hljs-keyword">public</span> u8 <span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> u256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> u <span class="hljs-operator">=</span> <span class="hljs-number">123</span>; <span class="hljs-comment">// uint is an alias for uint256</span>

    <span class="hljs-comment">/*
    int türleri için negatif sayılara izin verilir.
    Uint gibi, int8'den int256'ya kadar farklı aralıklar mevcuttur

    int256 -2 ** 255 to 2 ** 255 - 1 arasında değer alabilir
    int128 -2 ** 127 to 2 ** 127 - 1 arasında değer alabilir
    */</span>
    <span class="hljs-keyword">int8</span> <span class="hljs-keyword">public</span> i8 <span class="hljs-operator">=</span> <span class="hljs-number">-1</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> i256 <span class="hljs-operator">=</span> <span class="hljs-number">456</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> i <span class="hljs-operator">=</span> <span class="hljs-number">-123</span>; <span class="hljs-comment">// int is same as int256</span>

    <span class="hljs-comment">// minimum ve maximum int değerler</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> minInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">min</span>;
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> maxInt <span class="hljs-operator">=</span> <span class="hljs-keyword">type</span>(<span class="hljs-keyword">int</span>).<span class="hljs-built_in">max</span>;

    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> addr <span class="hljs-operator">=</span> <span class="hljs-number">0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c</span>;

    <span class="hljs-comment">/*
    Solidity'de veri türü byte, bir bayt dizisini temsil eder.
    Solidity iki tür bayt türü sunar: :

     - sabit byte dizisi
     - dinamik byte dizisi.
     
     Solidity'deki byte terimi, dinamik bir bayt dizisini temsil eder.     
     byte[] ın kısaltmasıdır.
    */</span>
    <span class="hljs-keyword">bytes1</span> a <span class="hljs-operator">=</span> <span class="hljs-number">0xb5</span>; <span class="hljs-comment">//  [10110101]</span>
    <span class="hljs-keyword">bytes1</span> b <span class="hljs-operator">=</span> <span class="hljs-number">0x56</span>; <span class="hljs-comment">//  [01010110]</span>

    <span class="hljs-comment">// Varsayılan değerler</span>
    <span class="hljs-comment">// Atanmamış değişkenlerin varsayılan bir değeri vardır</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> defaultBoo; <span class="hljs-comment">// false</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> defaultUint; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">int</span> <span class="hljs-keyword">public</span> defaultInt; <span class="hljs-comment">// 0</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> defaultAddr; <span class="hljs-comment">// 0x0000000000000000000000000000000000000000</span>
}
</code></pre>
`

export default html
