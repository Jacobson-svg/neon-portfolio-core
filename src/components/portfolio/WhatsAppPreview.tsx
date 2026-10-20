import { useLanguage } from '@/i18n/LanguageProvider'
import { useState } from 'react'
import type { Language } from '@/content/projects'
export type ChatFlow = 'customer' | 'merchant' | 'courier'
type Props = { flow?: ChatFlow; showSelector?: boolean; compact?: boolean }
function getMessages(flow: ChatFlow, lang: Language) {
    const isFr = lang === 'fr'
    if (flow === 'merchant')
        return [
            {
                who: 'right',
                text: isFr
                    ? 'Bonjour, je veux proposer des produits à mes clients.'
                    : 'Hi, I want to list products for my customers.',
            },
            {
                who: 'left',
                text: isFr
                    ? 'D’accord ! Quel produit souhaites-tu ajouter ?'
                    : 'Great! Which product would you like to add?',
            },
            {
                who: 'right',
                text: isFr
                    ? 'De l’huile végétale 1 L.'
                    : 'One litre of cooking oil.',
            },
            {
                who: 'left',
                text: isFr
                    ? 'Produit créé en brouillon. Veux-tu ajouter un prix et une photo ?'
                    : 'Product draft created. Would you like to add a price and photo?',
            },
        ]
    if (flow === 'courier')
        return [
            {
                who: 'left',
                text: isFr
                    ? '🔔 Nouvelle livraison disponible. Retrait : Akwa. Destination : Bonamoussadi.'
                    : '🔔 New delivery available. Pickup: Akwa. Destination: Bonamoussadi.',
            },
            {
                who: 'right',
                text: isFr
                    ? 'Je prends la livraison.'
                    : 'I’ll take the delivery.',
            },
            {
                who: 'left',
                text: isFr
                    ? 'Mission acceptée. Tu seras notifié quand le colis sera prêt.'
                    : 'Mission accepted. You’ll be notified when the parcel is ready.',
            },
            {
                who: 'right',
                text: isFr ? 'Colis récupéré.' : 'Parcel picked up.',
            },
            {
                who: 'left',
                text: isFr
                    ? '🚚 Livraison en cours. Le client est notifié.'
                    : '🚚 Delivery underway. The customer has been notified.',
            },
        ]
    return [
        {
            who: 'right',
            text: isFr
                ? 'Bonjour ! Je veux commander deux sacs de riz et de l’huile.'
                : 'Hi! I’d like to order two bags of rice and some cooking oil.',
        },
        {
            who: 'left',
            text: isFr
                ? 'Bien sûr. J’ai trouvé du riz et de l’huile au catalogue. Je transmets la demande au commerçant ?'
                : 'Of course. I found rice and cooking oil in the catalog. Shall I send your request to the merchant?',
        },
        {
            who: 'right',
            text: isFr
                ? 'Oui, fais livrer à Bonamoussadi.'
                : 'Yes, please deliver to Bonamoussadi.',
        },
        {
            who: 'left',
            text: isFr
                ? '✅ Demande envoyée. Un livreur sera notifié sur WhatsApp lorsque le colis sera prêt.'
                : '✅ Request sent. A courier will be notified on WhatsApp once the parcel is ready.',
        },
    ]
}
export function WhatsAppPreview({
    flow = 'customer',
    showSelector = false,
    compact = false,
}: Props) {
    const { language, t } = useLanguage()
    const [selected, setSelected] = useState<ChatFlow>(flow)
    const messages = getMessages(showSelector ? selected : flow, language)
    return (
        <div className={`phone-scene ${compact ? 'phone-compact' : ''}`}>
            {showSelector && (
                <div
                    className="flow-tabs"
                    role="group"
                    aria-label={t.detail.flow}
                >
                    {(['customer', 'merchant', 'courier'] as const).map(f => (
                        <button
                            key={f}
                            type="button"
                            className={selected === f ? 'is-active' : ''}
                            onClick={() => setSelected(f)}
                            aria-pressed={selected === f}
                        >
                            {t.detail[f]}
                        </button>
                    ))}
                </div>
            )}
            <div className="wa-phone" aria-label="WhatAsso illustrative chat">
                <div className="phone-notch" />
                <div className="wa-header">
                    <span className="wa-back" aria-hidden="true">
                        ‹
                    </span>
                    <span className="wa-avatar">W</span>
                    <span>
                        <strong>WhatAsso</strong>
                        <small>{t.chat.online}</small>
                    </span>
                    <span className="wa-dots" aria-hidden="true">
                        ⋮
                    </span>
                </div>
                <div className="wa-wall">
                    <div className="wa-date">{t.chat.today}</div>
                    {messages.map((m, i) => (
                        <div
                            className={`wa-bubble ${m.who}`}
                            key={`${selected}-${i}`}
                        >
                            {m.text}
                            <small>
                                {`10:${24 + i}`} {m.who === 'right' ? '✓✓' : ''}
                            </small>
                        </div>
                    ))}
                </div>
                <div className="wa-bottom">
                    <span>{t.chat.input}</span>
                    <span aria-hidden="true">➤</span>
                </div>
            </div>
            <span className="wa-caption">{t.chat.caption}</span>
        </div>
    )
}
