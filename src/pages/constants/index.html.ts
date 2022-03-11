// metadata
export const version = "0.8.10"
export const title = "Sabitler (Constants)"
export const description = "Sabit Değişkenler"

const html = `<p>Sabitler değiştirilemeyen değişkenlerdir.</p>
<p>Değerleri sabit kodlanmıştır ve sabitlerin kullanılması gaz maliyetinden tasarruf sağlayabilir.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Constants</span> </span>{
    <span class="hljs-comment">// sabit değişkenler büyük harfli yazılır</span>
    <span class="hljs-keyword">address</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MY_ADDRESS <span class="hljs-operator">=</span> <span class="hljs-number">0x777788889999AaAAbBbbCcccddDdeeeEfFFfCcCc</span>;
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MY_UINT <span class="hljs-operator">=</span> <span class="hljs-number">123</span>;
}
</code></pre>
`

export default html
