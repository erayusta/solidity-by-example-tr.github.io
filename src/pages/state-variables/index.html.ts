// metadata
export const version = "0.8.10"
export const title = "Durum Değişkeni Yazma ve Okuma (State Variable)"
export const description = "Durum Değişkeni Yazma ve Okuma (State Variable)"

const html = `<p>Bir durum değişkeni yazmak veya güncellemek için bir işlem göndermeniz gerekir..</p>
<p>Öte yandan, durum değişkenlerini herhangi bir işlem ücreti ödemeden ücretsiz olarak okuyabilirsiniz..</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">SimpleStorage</span> </span>{
    <span class="hljs-comment">// Bir sayıyı saklamak için durum değişkeni</span>
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> num;

    <span class="hljs-comment">// Bir durum değişkenine yazmak için bir işlem göndermeniz gerekiyor.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set</span>(<span class="hljs-params"><span class="hljs-keyword">uint</span> _num</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        num <span class="hljs-operator">=</span> _num;
    }

    <span class="hljs-comment">// Bir durum değişkeninden işlem göndermeden okuyabilirsiniz.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">view</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint</span></span>) </span>{
        <span class="hljs-keyword">return</span> num;
    }
}
</code></pre>
`

export default html
