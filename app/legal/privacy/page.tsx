export default function PrivacyPolicy() {
    return (
        <article>
            <h1>Privacy Policy</h1>
            <p className="lead text-xl text-muted-foreground mb-8">
                Last updated: February 5, 2026
            </p>

            <h2>1. Introduction</h2>
            <p>
                FlashFender (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data.
                This privacy policy will inform you as to how we look after your personal data when you visit our website
                (regardless of where you visit it from) or use our automotive inventory automation services.
            </p>

            <h2>2. The Data We Collect</h2>
            <p>
                We collect varied types of information to provide our specialized Multi-Profile Automation Service:
            </p>
            <ul>
                <li><strong>Identity Data:</strong> First name, last name, username.</li>
                <li><strong>Contact Data:</strong> Billing address, email address, telephone numbers.</li>
                <li><strong>Inventory Data:</strong> Vehicle VINs, specifications, images, and pricing data uploaded to our platform.</li>
                <li><strong>Platform Credentials:</strong> Encrypted authentication tokens for third-party platforms (e.g., Facebook, Craigslist) required for auto-posting.</li>
            </ul>

            <h2>3. How We Use Your Data</h2>
            <p>
                We will only use your personal data when the law allows us to. Most commonly, we use your data in the following circumstances:
            </p>
            <ul>
                <li>To provide the recurring auto-posting service you have purchased.</li>
                <li>To generate AI-powered descriptions for your vehicle inventory.</li>
                <li>To prevent fraud and &quot;shadow banning&quot; by analyzing posting patterns.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
                Our &quot;Chrome Profile Persistence&quot; technology stores session tokens in encrypted containers isolated by organization ID.
            </p>

            <h2>5. Contact Us</h2>
            <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
                <a href="mailto:privacy@flashfender.com" className="text-blue-400 hover:underline"> privacy@flashfender.com</a>.
            </p>
        </article>
    );
}
