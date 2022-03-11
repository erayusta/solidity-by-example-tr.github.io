// metadata
export const version = "0.8.10"
export const title = "Ether ve Wei"
export const description = "Solidity de Ether ve Wei Örnekleri"

const html = `<p>İşlemler <code>ether</code> ile ödenir.</p>
<p>1 doların 100 cent e eşit olmasına benzer şekilde, 1 <code>ether</code>  10<sup>18</sup> <code>wei</code> ye eşittir.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">EtherUnits</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneWei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">wei</span>;
    <span class="hljs-comment">// 1 wei 1 e eşittir</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneWei <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">wei</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;

    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> oneEther <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span>;
    <span class="hljs-comment">// 1 ether 10^18 wei ye eşittir</span>
    <span class="hljs-keyword">bool</span> <span class="hljs-keyword">public</span> isOneEther <span class="hljs-operator">=</span> <span class="hljs-number">1</span> <span class="hljs-literal">ether</span> <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
}
</code></pre>
`

export default html
