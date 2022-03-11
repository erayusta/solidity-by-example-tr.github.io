// metadata
export const version = "0.8.10"
export const title = "Değişmezler"
export const description = "Değişmez Değişkenler"

const html = `<p>Değişmez değişkenler sabitler gibidir. Değişmez değişkenlerin değerleri constructor içinde ayarlanabilir ancak daha sonra değiştirilemez.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Immutable</span> </span>{
    <span class="hljs-comment">// büyük harfli sabit değişkenlere kodlama kuralı</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_ADDRESS;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> MY_UINT;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _myUint</span>) </span>{
        MY_ADDRESS <span class="hljs-operator">=</span> <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>;
        MY_UINT <span class="hljs-operator">=</span> _myUint;
    }
}
</code></pre>
`

export default html
