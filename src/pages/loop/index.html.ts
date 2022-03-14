// metadata
export const version = "0.8.10"
export const title = "For ve While Döngüsü"
export const description = "Solidity'de for ve while döngüsü örneği"

const html = `<p>Solidity <code>for</code>, <code>while</code>, ve  <code>do while</code> döngülerini destekler.</p>
<p>Sınırsız döngüler yazmayın, çünkü bu gaz limitini aşabilir ve işleminizin başarısız olmasına neden olabilir.</p>
<p>Yukarıdaki nedenle, <code>while</code> ve <code>do while</code> döngüleri nadir kullanılır.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Loop</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">loop</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// for loop</span>
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">uint</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>; i <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>; i<span class="hljs-operator">+</span><span class="hljs-operator">+</span>) {
            <span class="hljs-keyword">if</span> (i <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">3</span>) {
                <span class="hljs-comment">// Continue ile bir sonraki döngüye geçer</span>
                <span class="hljs-keyword">continue</span>;
            }
            <span class="hljs-keyword">if</span> (i <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">5</span>) {
                <span class="hljs-comment">// Break ile döngüden çıkar</span>
                <span class="hljs-keyword">break</span>;
            }
        }

        <span class="hljs-comment">// while loop</span>
        <span class="hljs-keyword">uint</span> j;
        <span class="hljs-keyword">while</span> (j <span class="hljs-operator">&lt;</span> <span class="hljs-number">10</span>) {
            j<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        }
    }
}
</code></pre>
`

export default html
