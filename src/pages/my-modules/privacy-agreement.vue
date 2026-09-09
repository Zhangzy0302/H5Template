<script setup lang="ts">
  defineOptions({
    name: 'PrivacyAgreement'
  })
</script>

<template>
  <div safe-area-inset-top p-layout-padding class="follow_box">
    <div class="policy-page">
      <main class="policy-content">
        <section>
          <p class="intro">
            The use of FokChat through mobile applications may involve
            collection and use of your information. This Privacy Policy
            explains how your information is collected, used and
            disclosed.
          </p>
          <p>
            Please read this Privacy Policy carefully to understand how
            you may protect your personal information.
          </p>
        </section>

        <section>
          <h2>1. Application Scope of this Privacy Policy</h2>
          <p>
            <strong>1.1</strong>
            By using FokChat, you agree that we may collect, use and share
            your information in accordance with this Privacy Policy.
          </p>
          <p>
            <strong>1.2</strong>
            This Privacy Policy forms part of the FokChat Terms of Service.
          </p>
          <p>
            <strong>1.3</strong>
            We may revise this Privacy Policy from time to time.
          </p>
          <p>
            <strong>1.4</strong>
            This Privacy Policy does not apply to third-party services.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 User-provided Information</h3>
          <ul>
            <li>
              Account information such as nickname, gender, date of birth,
              email and password
            </li>
            <li>Profile information visible to other users</li>
            <li>User-generated content (UGC)</li>
            <li>Payment and transaction information</li>
            <li>Communications and feedback</li>
            <li>Social media account information</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li>Device identifiers and system information</li>
            <li>Network activity and usage history</li>
            <li>Error and crash reports</li>
            <li>Metadata related to uploaded content</li>
          </ul>
        </section>

        <section>
          <h2>3. Sensitive Personal Information</h2>
          <p>
            With your permission, we may access your microphone and camera
            to provide features such as audio recording and video calls.
          </p>
          <p>
            We do not use sensitive personal information for direct
            marketing unless you explicitly agree.
          </p>
        </section>

        <section>
          <h2>4. Children’s Information</h2>
          <p>
            FokChat is only available to users aged 18 or above. We do not
            knowingly collect personal information from minors.
          </p>
        </section>

        <section>
          <h2>5. How We Use Your Information</h2>
          <ul>
            <li>Verify your identity</li>
            <li>Enable communication between users</li>
            <li>Provide and improve services</li>
            <li>Send service-related notifications</li>
            <li>Detect fraud and illegal activities</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2>6. Data Transfer and Storage</h2>
          <p>
            Your information may be transferred to and stored on servers
            outside your jurisdiction. By using FokChat, you consent to such
            transfers.
          </p>
        </section>

        <section>
          <h2>7. Analytics and Third-Party Tools</h2>
          <ul>
            <li>Google Analytics / Firebase</li>
            <li>AppsFlyer</li>
            <li>Facebook Conversion Tracking</li>
            <li>Firebase Crashlytics</li>
          </ul>
        </section>

        <section>
          <h2>8. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share
            information with affiliates, service providers or as required
            by law.
          </p>
        </section>

        <section>
          <h2>9. Security Measures</h2>
          <p>
            We implement reasonable administrative, physical and technical
            safeguards to protect your information, but no system is
            completely secure.
          </p>
        </section>

        <section>
          <h2>10. Access, Correction and Deletion</h2>
          <p>
            You may access, modify or delete your personal information
            through your account settings or by contacting us.
          </p>
        </section>

        <section>
          <h2>11. Data Retention</h2>
          <p>
            We may retain certain information after account deletion where
            required by law or for legitimate business purposes.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Continued
            use of the Service indicates acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please
            contact us at:
          </p>
          <p class="email">📧 FokChat@FokChat.site</p>
        </section>
      </main>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .follow_box {
    color: #fff;
    padding-top: calc(
      var(--van-nav-bar-height) + var(--ai-view-padding-top)
    );
    min-height: 100vh;
    background: var(--ai-follow-bg-color);
  }

  .policy-page {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 14px;
    line-height: 1.6;
  }

  .policy-header {
    padding: 16px;
    border-bottom: 1px solid #eee;
    text-align: center;
  }

  .policy-header h1 {
    font-size: 18px;
    font-weight: 600;
  }

  .policy-content {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
  }

  .policy-content section {
    margin-bottom: 20px;
  }

  .policy-content h2 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .policy-content h3 {
    font-size: 15px;
    margin: 10px 0 6px;
  }

  .policy-content ul {
    padding-left: 18px;
  }

  .policy-content li {
    margin-bottom: 6px;
  }

  .intro {
    font-weight: 500;
  }

  .email {
    font-weight: 600;
    color: #4a6cff;
  }

  .policy-footer {
    padding: 12px 16px;
    border-top: 1px solid #eee;
    background: #fff;
  }

  .agree-btn {
    width: 100%;
    height: 44px;
    border: none;
    border-radius: 22px;
    background: #4a6cff;
    color: #fff;
    font-size: 16px;
  }
</style>
