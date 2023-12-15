import mongoose, {Schema, Document} from 'mongoose';

const PricingpageSchema: Schema = new Schema({
    meta_tags:{
        metaTitle: {type: String},
        slug: {type: String},
        MetaDescription: {type: String},
    },
    banner: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        img: {type: String, required: true},
    },

    pricing_section: {
        title: {type: String},
        list: [
            {
                title: {type: String, required: true},
                icon: {type: String, required: true},
                description: [
                    {
                        title: {type: String, required: true}
                    }
                ],
                btnLink: {type: String, required: true},
                featured: {type: Boolean, required: true},
                tag: {type: String},
                category: {
                    type: String,
                    required: true,
                    enum: ['basic', 'standard', 'pro']
                },
            }
        ]
    },
    testimonials: {
        title: {type: String, required: true},
        list: [
            {
                name: {type: String, required: true},
                designation: {type: String, required: true},
                img: {type: String, required: true},
                description: {type: String, required: true}
            }
        ]
    }
}, {timestamps: true});

export const PricingModel = mongoose.model('pricingpage', PricingpageSchema);