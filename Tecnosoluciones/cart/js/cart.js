document.addEventListener('DOMContentLoaded', () => {
  const subtotalEl = document.querySelector('.subtotal')
  const totalEl = document.querySelector('.total-amount')
  const shippingCost = 0

  function formatCOP(value) {
    return value.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    })
  }

  function updateTotals() {
    const products = Array.from(document.querySelectorAll('.product'))
    let subtotal = 0

    products.forEach((product) => {
      const price = parseInt(product.dataset.price, 10) || 0
      const qtyInput = product.querySelector('.qty-input')
      const qty = parseInt(qtyInput?.value || '0', 10) || 0
      subtotal += price * qty
    })

    if (subtotalEl) subtotalEl.textContent = formatCOP(subtotal)
    if (totalEl) totalEl.textContent = formatCOP(subtotal + shippingCost)
  }

  function bindProductEvents(product) {
    const incButton = product.querySelector('.qty-btn.inc')
    const decButton = product.querySelector('.qty-btn.dec')
    const qtyInput = product.querySelector('.qty-input')
    const removeButton = product.querySelector('.remove')

    if (incButton) {
      incButton.addEventListener('click', () => {
        qtyInput.value = Math.max(0, parseInt(qtyInput.value || '0', 10) + 1)
        updateTotals()
      })
    }

    if (decButton) {
      decButton.addEventListener('click', () => {
        qtyInput.value = Math.max(0, parseInt(qtyInput.value || '0', 10) - 1)
        updateTotals()
      })
    }

    if (qtyInput) {
      qtyInput.addEventListener('change', () => {
        if (parseInt(qtyInput.value || '0', 10) < 0) {
          qtyInput.value = 0
        }
        updateTotals()
      })
    }

    if (removeButton) {
      removeButton.addEventListener('click', () => {
        product.remove()
        updateTotals()
      })
    }
  }

  document.querySelectorAll('.product').forEach(bindProductEvents)
  updateTotals()
})
