// metadata
export const version = "0.8.10"
export const title = "Gas"
export const description = "Solidity de gas ve gas limit örneği"

const html = `<h3 id="how-much-ether-do-you-need-to-pay-for-a-transaction">Bir işlem için ne kadar <code>ether</code> ödemeniz gerekiyor?</h3>
<p><code> harcanan gas * gas fiyatı</code> kadar <code>ether</code> ödersiniz, burada</p>
<ul>
<li><code>gas</code> bir hesaplama birimidir</li>
<li><code>harcanana gas</code> bir işlemde kullanılan toplam <code>gas</code> miktarıdır</li>
<li><code>gas fiyatı</code>, <code>gas</code> başına ne kadar <code>ether</code> ödemek istediğinizdir </li>
</ul>
<p>Gaz fiyatı daha yüksek olan işlemlerin bir bloğa dahil edilme önceliği daha yüksektir.</p>
<p>Kullanılmayan gaz iade edilecektir.</p>
<h3 id="gas-limit">Gas Limiti</h3>
<p>Harcayabileceğiniz gaz miktarı için 2 üst sınır vardır.</p>
<ul>
<li><code>gas limiti</code> (işleminiz için kullanmak istediğiniz maksimum gaz miktarı, sizin tarafınızdan belirlenir)</li>
<li><code>block gas limiti</code> (ağ tarafından belirlenen, bir blokta izin verilen maksimum gaz miktarı)</li>
</ul>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.10;</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">Gas</span> </span>{
    <span class="hljs-keyword">uint</span> <span class="hljs-keyword">public</span> i <span class="hljs-operator">=</span> <span class="hljs-number">0</span>;

    <span class="hljs-comment">// Gönderdiğiniz tüm gazın bitmesi işleminizin başarısız olmasına neden olur.</span>
    <span class="hljs-comment">// Durum değişiklikleri geri alındı.</span>
    <span class="hljs-comment">// Harcanan gaz iade edilmez.</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">forever</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Burada tüm gaz tükenene kadar bir döngü çalıştırıyoruz</span>
        <span class="hljs-comment">// ve işlem başarısız</span>
        <span class="hljs-keyword">while</span> (<span class="hljs-literal">true</span>) {
            i <span class="hljs-operator">+</span><span class="hljs-operator">=</span> <span class="hljs-number">1</span>;
        }
    }
}
</code></pre>
`

export default html
